# Dockerfile optimisé pour le portfolio Next.js en production
FROM node:18-alpine AS base

# Installation des dépendances système nécessaires
RUN apk add --no-cache libc6-compat

# Installation des dépendances uniquement lorsque nécessaire
FROM base AS deps
WORKDIR /app

# Installation des dépendances avec cache optimisé
COPY package.json package-lock.json* ./
RUN npm ci --only=production --ignore-scripts && npm cache clean --force

# Reconstruction du code source avec optimisations
FROM base AS builder
WORKDIR /app

# Réinstallation complète pour le build (including devDependencies)
COPY package.json package-lock.json* ./
RUN npm ci

# Copie du code source
COPY . .

# Variables d'environnement optimisées pour la production
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_DEBUG=false
ENV __NEXT_DEBUG=false
ENV __NEXT_DISABLE_ERROR_OVERLAY=true
ENV CI=true

# Build optimisé avec nettoyage du cache
RUN npm run build && npm cache clean --force

# Image de production optimisée
FROM base AS runner
WORKDIR /app

# Variables d'environnement de production
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_DEBUG=false
ENV __NEXT_DEBUG=false
ENV __NEXT_DISABLE_ERROR_OVERLAY=true
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Création de l'utilisateur non-root pour la sécurité
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copie optimisée des dépendances de production uniquement
COPY --from=deps --chown=nextjs:nodejs /app/node_modules ./node_modules

# Copie des fichiers de l'application
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/server.js ./server.js
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json

# Configuration de sécurité
USER nextjs

# Health check pour monitoring
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:$PORT', (res) => { \
    if (res.statusCode === 200) process.exit(0); else process.exit(1); \
  }).on('error', () => process.exit(1));"

EXPOSE 3000

# Utilisation du serveur personnalisé optimisé
CMD ["node", "server.js"]
