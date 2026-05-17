# Shared dependency layer. Docker installs dependencies here, not on the host.
FROM node:22-slim AS deps

WORKDIR /app

COPY package*.json ./
RUN npm install

# Local development target. Source code is bind-mounted by docker-compose.
FROM node:22-slim AS development

WORKDIR /app
ENV NODE_ENV=development

COPY --from=deps /app/node_modules ./node_modules
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]

# Build target for production assets.
FROM node:22-slim AS build

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Future VPS-friendly production image: small nginx static server.
FROM nginx:1.27-alpine AS production

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
