# Dockerfile pour le portfolio Next.js
FROM node:18-alpine AS base

# Installation des dépendances uniquement lorsque nécessaire
FROM base AS deps
# Vérification de libc6-compat pour Alpine
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Installation des dépendances basées sur le gestionnaire de paquets préféré
COPY package.json package-lock.json* ./
RUN npm ci

# Reconstruction du code source uniquement lorsque nécessaire
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Variables d'environnement pour désactiver le debug
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_DEBUG=false
ENV __NEXT_DEBUG=false
ENV __NEXT_DISABLE_ERROR_OVERLAY=true

RUN npm run build

# Image de production, copie de tous les fichiers et exécution de Next.js
FROM base AS runner
WORKDIR /app

# Variables d'environnement de production
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_DEBUG=false
ENV __NEXT_DEBUG=false
ENV __NEXT_DISABLE_ERROR_OVERLAY=true

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copie des fichiers nécessaires
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /app/server.js ./server.js

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Utilisation du serveur personnalisé
CMD ["node", "server.js"]
