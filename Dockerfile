FROM node:20.8-alpine3.18 AS base

# Instalar las dependencias cuando sean necesarias
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json ./
RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*
RUN npm i --frozen-lockfile

# Reconstruir el código fuente solo cuando sea necesario
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*
RUN npm run build

# Si usa npm, comente arriba y use a continuación en su lugar
# RUN npm run build

# Imagen de producción, copie todos los archivos y ejecútelo a continuación.
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Establecer el permiso correcto para la caché previa al renderizado
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Aproveche automáticamente los seguimientos de salida para reducir el tamaño de la imagen
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
