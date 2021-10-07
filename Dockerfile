# create intermediate image
FROM node:14.18-alpine AS npm-build

WORKDIR /usr/src/build

COPY . .

RUN npm install -g npm@7

RUN npm ci --only=prod
RUN npm i @nestjs/cli@`node -p -e "require('./package.json').devDependencies['@nestjs/cli']"` --no-package-lock
RUN npm run build

RUN npm uninstall @nestjs/cli --no-save

# second step, only copy exactly what we need
FROM node:14.18-alpine

WORKDIR /usr/src/app

COPY --from=npm-build /usr/src/build/dist                   dist
COPY --from=npm-build /usr/src/build/node_modules           node_modules
COPY --from=npm-build /usr/src/build/package.json           package.json
COPY --from=npm-build /usr/src/build/tsconfig.json          tsconfig.json
COPY --from=npm-build /usr/src/build/tsconfig.build.json    tsconfig.build.json

EXPOSE 8080

CMD npm run migration:run:prod && npm run start:prod