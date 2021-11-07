FROM node:13.12.0-alpine

COPY ./package.json ./package.json
RUN npm install
RUN npm install react-scripts@3.4.1 -g 

COPY ./ ./
EXPOSE 3000
CMD [ "npm", "run", "dev"]