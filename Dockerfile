# Base image
FROM node:20-alpine

# Working directory
WORKDIR /app

# Dependencies pehle copy karo (caching ke liye)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Baaki saara code copy karo
COPY . .

# Port expose karo (apna port yahan likho)
EXPOSE 3000

# Server start karo
CMD ["node" , "index.js"]