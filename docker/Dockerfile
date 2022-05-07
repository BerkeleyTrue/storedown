# Build
FROM node:16-alpine3.15 as builder

WORKDIR /usr/lib/app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Build dist
COPY . .
RUN npm run build

# Relese
FROM nginx:stable-alpine
COPY --from=builder /usr/lib/app/dist /usr/share/nginx/html/

EXPOSE 80
