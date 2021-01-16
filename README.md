Express based backend application with React frontend.

## Requirements:
- Node 12.3.1
- Redis
- Docker
- Docker-compose

## Setup
#### App Manager (APIs to manage application running inside container)
1. `cd app-manager` go into app-manager directory
2. `yarn install` install all the required packages
3. `node index.js` run api server(app-manager will run on `80`)

APIs:
1. `http://localhost/_actions/start` to start application
2. `http://localhost/_actions/stop` to stop application
3. `http://localhost/_actions/reload` to restart application
4. `http://localhost/_actions/logs` to get logs from flickr-photo-grid-api
5. `http://localhost/_actions/flush-redis` to flush the redis cache


Ports:
1. app-manager - `80`
2. flickr-photo-grid-api -`8000`
3. flickr-photo-grid-web - `3000`

Redis server must be running on port `6379`, otherwise modify connection parameter in `api/index.js`.
Update the `redis` configuration file if needed in `redis/redis.conf`

NOTE : Application is set to run in development mode, for production mode, change `yarn start` to `yarn build` in Dockerfile.web (more options are mentioned in web readme)
