# ---------- Build Stage ----------
FROM node:18-alpine AS build

WORKDIR /app

# Copy dependency files first (better caching)
COPY package.json package-lock.json* ./
RUN npm install

# Copy rest of the app
COPY . .

# Build Vite app
RUN npm run build

# ---------- Production Stage ----------
FROM nginx:alpine

# Copy built files to nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
