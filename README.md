# cg-trainer-service
Requirements:
* Node 14
* Docker
* Docker-compose

## Running the application
Before running the application, you will first need to build the Docker image locally. You can do that via:
```
npm run docker:build
```
Once the image is built, you can start the app with:
```
npm run docker
```
Which will start both the application and the Postgres DB