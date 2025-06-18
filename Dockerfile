FROM registry.lottefn.vn:5000/node:18-alpine as builder
# FROM node:18-alpine as builder
WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm config set registry https://registry.lottefn.vn/repository/npm-central/
RUN npm config set strict-ssl false
RUN npm config set fetch-retries 3
RUN npm config set fetch-retry-factor 10
RUN npm ci

COPY . .
RUN npx vite build

FROM registry.lottefn.vn:5000/nginx:alpine as production
# FROM nginx:alpine as production

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]