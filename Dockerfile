FROM node:18-alpine
WORKDIR /app
COPY package.json tailwind.config.js postcss.config.js ./
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev-exposed"]