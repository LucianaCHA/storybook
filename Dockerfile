FROM node:alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./

# Path:     
RUN npm run build
EXPOSE 6006
CMD ["npm", "start"]


