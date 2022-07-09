FROM node:lts-alpine  AS build
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 4200
RUN chown -R node /usr/src/app
USER node
CMD ["ng", "serve", "--host=0.0.0.0"]
# CMD ["npm", "start"]
