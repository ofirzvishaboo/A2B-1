FROM node:20-slim

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy source
COPY . .

# Expose dev port
EXPOSE 5173

# Start dev server
CMD ["npm", "run", "dev", "--", "--host"]

