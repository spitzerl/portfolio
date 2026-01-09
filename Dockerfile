# Dockerfile optimisé pour Portainer / Next.js (standalone output)

# --- Dependencies stage ---
FROM node:18-alpine AS deps
WORKDIR /app
RUN apk add --no-cache libc6-compat
COPY package*.json ./
RUN npm ci

# --- Builder stage ---
FROM node:18-alpine AS builder
WORKDIR /app
# Reuse node_modules pour accélérer le build
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=production
RUN npm run build

# --- Runner stage (image finale) ---
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3002

# créer un user non-root
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copier l'output standalone de Next.js et les assets publics
# .next/standalone contient server.js et son package.json + node_modules nécessaires
COPY --from=builder --chown=appuser:appgroup /app/.next/standalone ./
COPY --from=builder --chown=appuser:appgroup /app/public ./public

USER appuser
EXPOSE 3002

# Healthcheck simple via Node.js (utilise PORT si défini)
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "const p=process.env.PORT||3002;require('http').get('http://127.0.0.1:'+p,res=>process.exit(res.statusCode===200?0:1)).on('error',()=>process.exit(1));"

# Démarrage (server.js fourni par le standalone output)
CMD ["node", "server.js"]
