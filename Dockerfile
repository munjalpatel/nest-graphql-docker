FROM node:12.16-alpine As builder
WORKDIR /usr/src/app
RUN npm install -g rimraf request @nestjs/cli
COPY package*.json ./
RUN npm ci
COPY . .
ENV NODE_ENV=production
RUN npm run build

FROM node:12.16-alpine
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/schema.gql ./schema.gql
CMD ["node", "dist/main"]
EXPOSE 5600