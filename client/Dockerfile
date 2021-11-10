FROM node:gallium
WORKDIR /client

COPY . ./
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts -g
EXPOSE 3000