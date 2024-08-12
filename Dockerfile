FROM node:lts-alpine AS build

ENV NPM_CONFIG_UPDATE_NOTIFIER=false
ENV NPM_CONFIG_FUND=false

# Install pnpm globally
RUN npm install -g pnpm

# Add any needed environment variables here following this same format
# ARG SAMPLE_ENVIRONMENT_VARIABLE_1
# ARG SAMPLE_ENVIRONMENT_VARIABLE_2

WORKDIR /app

COPY pnpm-lock.yaml ./
COPY package.json ./

RUN pnpm install --frozen-lockfile

COPY . ./

RUN pnpm run build

FROM caddy

WORKDIR /app

COPY Caddyfile ./

COPY --from=build /app/dist /app/dist

CMD ["caddy", "run", "--config", "Caddyfile", "--adapter", "caddyfile"]
