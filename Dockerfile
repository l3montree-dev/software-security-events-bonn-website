FROM node:24.7.0@sha256:701c8a634cb3ddbc1dc9584725937619716882525356f0989f11816ba3747a22 as builder

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
FROM gcr.io/distroless/nodejs24-debian12:nonroot@sha256:1ab51c2cd3568f94aa31d4e5eb7e7918a16a30179d004a0c7011376783eb5dbf

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
