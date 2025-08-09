# Stage 1: Build stage
FROM node:16-alpine AS builder
RUN apk add --no-cache libc6-compat

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Production stage
FROM node:16-alpine
RUN apk add --no-cache libc6-compat

WORKDIR /usr/src/app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV DOMAIN_NAME=gpufinder.ovh

COPY package*.json ./
RUN npm ci --only=production

COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/next.config.js ./next.config.js

EXPOSE 3000
ENV PORT=3000

CMD ["npm", "start"]
