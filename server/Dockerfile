FROM node:18.20.3-slim
WORKDIR /app
COPY package-lock.json package.json ./
RUN npm install
COPY . .
EXPOSE 4000
CMD [ "npm", "run", "dev"]