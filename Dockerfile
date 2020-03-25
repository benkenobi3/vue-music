FROM node:carbon AS base
WORKDIR /app

# --- #
FROM base AS dependencies

COPY package*.json ./
RUN npm install

# --- #
FROM dependencies AS build

WORKDIR /app

COPY public /app/public
COPY src /app/src
COPY server.js /app

RUN npm run build

# --- Alpine ----
FROM node:8.9-alpine AS release  

WORKDIR /app

COPY --from=dependencies /app/package.json ./

RUN npm install --only=production

COPY --from=build /app ./

CMD ["node", "server.js"]
