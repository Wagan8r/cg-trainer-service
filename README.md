# cg-trainer-service
Requirements:
* Node 14
* Docker
* Docker-compose
* Curl

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

## Dev setup
Install mode modules
```
npm i
```
Start the Postgres DB
```
npm run docker
```
NOTE: This will also start the `cg-trainer-service` image, but for local dev the app is started on port `8081`

Run db migrations
```
npm run migration:run
```
Start the app
```
npm run start
```
## Using the API
To create a new trainer within the service run:
```
curl -i -H "Content-Type: application/json" -X POST -d '{"email": "nerfherder@kessel.com","phone": "7203456789","first_name": "Han","last_name": "Solo"}' http://localhost:8080/v1/trainers
```
The above will print out the response from the server. You can take the `id` of the response to query for the trainer with:
```
curl -i -H "Content-Type: application/json" -X GET http://localhost:8080/v1/trainers/{id}
```
Alternatively, you can use a client such as Postman
## Running the tests
There are two suites of tests. One is the main API suite and the other is to test the DB migrations.
### API tests
You'll first need to make sure that the DB is up to date on its migrations by running:
```
npm run migration:run
```
then
```
npm run test
```
For CI environments, both of the above command have been combined into the below and are what is executed in CircleCI
```
npm run test:ci
```
### Migration tests
```
npm run test:migration
```
NOTE: the migration tests run the `up` and `down` of every migration. The end result is an empty DB