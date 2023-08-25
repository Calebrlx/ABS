# ABS/server/Dockerfile
FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ../client/dist ./client/dist
CMD ["node", "src/server.js"]