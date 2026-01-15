# Stage 1: Build the application
FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --only=production

COPY . .

# Stage 2: Run the application
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app .

EXPOSE 8081

CMD ["node", "index.js"]
