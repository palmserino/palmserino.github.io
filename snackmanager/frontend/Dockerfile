FROM node:13.12.0-alpine
WORKDIR /app/snackmanager/frontend
COPY ./ ./
RUN npm install 
RUN npm install react-scripts@3.4.1 -g 
EXPOSE 3000
CMD ["npm", "run", "dev"]
