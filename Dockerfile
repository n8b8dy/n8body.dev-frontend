FROM node:16-alpine AS build

WORKDIR /usr/app

COPY ./package*.json ./
RUN npm install

COPY ./ .
RUN npm run build

ENV NODE_ENV=production
ENV PORT=3000

CMD ["npm", "run" ,"start"]
