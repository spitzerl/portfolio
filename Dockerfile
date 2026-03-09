
FROM node:18-alpine AS builder
WORKDIR /app

RUN apk add --no-cache libc6-compat python3 make g++ bash

COPY package*.json ./

RUN npm ci

COPY . .

ENV NODE_ENV=production
ENV NODE_OPTIONS="--max-old-space-size=4096"

RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app

ARG APP_ENV=production
ARG NEXT_PUBLIC_BASE_URL=http://localhost:3002
ARG PORT=3002

ENV NODE_ENV=${APP_ENV}
ENV NEXT_PUBLIC_BASE_URL=${NEXT_PUBLIC_BASE_URL}
ENV PORT=${PORT}

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

COPY --from=builder --chown=appuser:appgroup /app/.next/standalone ./
COPY --from=builder --chown=appuser:appgroup /app/public ./public

USER appuser
EXPOSE ${PORT}

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "const p=process.env.PORT||3002;require('http').get('http://127.0.0.1:'+p,res=>process.exit(res.statusCode===200?0:1)).on('error',()=>process.exit(1));"

CMD ["node", "server.js"]
