# ---- Stage 1: Build ----
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm ci --legacy-peer-deps

# Copy all source code
COPY . .

# Build Next.js app
RUN npm run build

# ---- Stage 2: Run ----
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copy only necessary files from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose port 3000
EXPOSE 3000

# Start Next.js
CMD ["npm", "start"]
