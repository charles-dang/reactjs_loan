FROM node:9.3.0

RUN npm install -g serve

COPY build /build

CMD serve -p 80 -s /build

