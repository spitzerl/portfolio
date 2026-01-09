# Dockerfile optimisé pour Portainer / Next.js (standalone output)

# --- Builder stage ---
FROM node:18-alpine AS builder
WORKDIR /app

# Outils natifs nécessaires pour compiler certaines dépendances (esbuild, etc.)
RUN apk add --no-cache libc6-compat python3 make g++ bash

# Copier les fichiers package pour utiliser le cache Docker
COPY package*.json ./

# Installer toutes les dépendances nécessaires au build (inclut devDependencies)
RUN npm ci

# Copier le reste du projet
COPY . .

# Variables pour le build (augmente la mémoire Node si nécessaire)
ENV NODE_ENV=production
ENV NODE_OPTIONS="--max-old-space-size=4096"

# Build Next.js (génère .next/standalone)
RUN npm run build

# --- Runner stage (image finale) ---
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3002

# Créer un user non-root
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copier l'output standalone de Next.js et les assets publics
COPY --from=builder --chown=appuser:appgroup /app/.next/standalone ./
COPY --from=builder --chown=appuser:appgroup /app/public ./public

USER appuser
EXPOSE 3002

# Healthcheck simple via Node.js (utilise PORT si défini)
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "const p=process.env.PORT||3002;require('http').get('http://127.0.0.1:'+p,res=>process.exit(res.statusCode===200?0:1)).on('error',()=>process.exit(1));"

# Démarrage (server.js fourni par le standalone output)
CMD ["node", "server.js"]
