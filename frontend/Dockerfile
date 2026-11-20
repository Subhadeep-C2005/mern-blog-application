
# Stage 1: Build the React application
FROM node:22-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy frontend source code
COPY . .

# Backend API URL (can be overridden during Docker build)
ARG VITE_BACKEND_URL=http://localhost:3000/api/v1
ENV VITE_BACKEND_URL=${VITE_BACKEND_URL}

# Create production build
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:1.27-alpine

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy production build
COPY --from=build /app/dist /usr/share/nginx/html

# Expose application port
EXPOSE 8080

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
