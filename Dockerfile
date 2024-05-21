# Production image, copy all the files and run next
FROM node:16-alpine
RUN apk add --no-cache libc6-compat

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


COPY package*.json ./
# RUN npm install
RUN npm ci

COPY . .

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV DOMAIN_NAME stockfinder.tech

RUN npm run build

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

RUN mkdir -p /usr/src/app/.next/cache 
RUN chown -R nextjs:nodejs /usr/src/app/.next

USER nextjs

EXPOSE ${DOCKER_FRONTEND_PORT}
ENV PORT=${DOCKER_FRONTEND_PORT}


CMD ["node", "server.js"]