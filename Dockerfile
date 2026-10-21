FROM node:24.22.1@sha256:5630d96570d4ca4a8523fda3d169d0114554d0f48293e1ae3db6be7c79b42a17 AS builder

WORKDIR /usr/app/
ENV PORT 3000
EXPOSE 3000

COPY package.json .
COPY package-lock.json .
RUN npm ci

COPY . .

ENV NODE_ENV=production
RUN npm run build

# checkov:skip=CKV_DOCKER_3
FROM gcr.io/distroless/nodejs24-debian12:nonroot@sha256:14d42e2511532589a7c7e01a753667a74fcc96266e137e8125006b87b0c32d0a

USER 53111

# checkov:skip=CKV_DOCKER_2
WORKDIR /usr/app/
ENV PORT 3000
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=builder --chown=53111:53111 /usr/app/.next /usr/app/.next
COPY --from=builder /usr/app/node_modules /usr/app/node_modules
COPY --from=builder /usr/app/package.json /usr/app/package.json
COPY --from=builder --chown=53111:53111 /usr/app/public /usr/app/public

CMD [ "./node_modules/next/dist/bin/next", "start" ]
