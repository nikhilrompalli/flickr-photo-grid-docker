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
app-manager will run on `80` port
flickr-photo-grid-api will run on `8000`
flickr-photo-grid-web will run on `3000`

Redis server must be running on port `6379`, otherwise modify connection parameter in `api/index.js`.
Update the `redis` configuration file if needed in `redis/redis.conf`

Application is set to run in development mode, if wanted to run in production mode, change `yarn start` to `yarn build` in Dockerfile.web (more options are mentioned in web readme)

#### WEB (Frontend)
1. `yarn run build` to build frontend
2. serve start content from `build` folder

NOTE : To serve stuff locally during development can also run `yarn run start` which would start serving frontend in development mode.
You should set `REACT_APP_API_URL` environment variable to make calls to backend. Currently its defaulted to `http://localhost:8000`.
