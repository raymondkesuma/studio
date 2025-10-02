# ---- Stage 1: Build ----
FROM node:20-slim AS builder

WORKDIR /app

# Copy dependencies
COPY package*.json ./
RUN npm ci --legacy-peer-deps

# Copy seluruh source code
COPY . .

# Build Next.js
RUN npm run build

# ---- Stage 2: Run ----
FROM node:20-slim AS runner

WORKDIR /app
ENV NODE_ENV=production

# Copy hanya yang dibutuhkan untuk runtime
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
# kalau kamu pakai Next.js App Router, .next sudah cukup
# folder public hanya dicopy kalau memang ada

EXPOSE 3000
CMD ["npm", "start"]
