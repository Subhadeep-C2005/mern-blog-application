
# Use Node.js 22 Alpine as the base image
FROM node:22-alpine

# Set the working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies
RUN npm ci --omit=dev

# Copy application source code
COPY . .

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Expose backend port
EXPOSE 3000

# Start the backend application
CMD ["npm", "start"]
