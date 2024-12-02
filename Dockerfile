#Stage 1 : Build Stage
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY . /app
CMD ["npm", "start"]