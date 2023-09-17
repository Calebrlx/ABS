# ABS/client/Dockerfile
FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install -g npm@latest  # <-- Upgrade npm
RUN npm install
RUN npm install popper.js@latest consolidate@latest  # <-- Update deprecated packages
RUN npm install bootstrap jquery
COPY . .
RUN npm run build

# Serve the app using a production-ready server (optional)
# Uncomment the lines below if you want to use serve package
# RUN npm install -g serve
# CMD ["serve", "-s", "dist"]

# Or, for development, serve the app using Vue's built-in server
CMD ["npm", "run", "serve"]