const express = require('express');
const fetch = require('node-fetch');
const redis = require('redis');
var cors = require('cors');

// create express application instance
const app = express();
app.use(cors())


app.post('/_action/start', (req, res) => {
  console.log('POST /_action/start')
  const { exec } = require('child_process');
	  exec('docker-compose -f ../docker-compose.yaml up -d', (err, stdout, stderr) => {
	  if (err) {
	    console.error(err)
	    return res.send(err);
	  } else {
		  console.log(stdout + stderr);
	   return res.send(stdout + stderr);
	  }
	});
});

app.post('/_action/stop', (req, res) => {
  console.log('POST /_action/stop')
  const { exec } = require('child_process');
	  exec('docker-compose -f ../docker-compose.yaml down', (err, stdout, stderr) => {
	  if (err) {
	    console.error(err)
	    return res.send(err);
	  } else {
	   console.log(stdout + stderr);
	   return res.send(stdout + stderr);
	  }
	});
});

app.get('/_action/logs', (req, res) => {
  console.log('GET /_action/logs')
  const { exec } = require('child_process');
	  exec('docker logs flickr-photo-grid-api', (err, stdout, stderr) => {
	  if (err) {
	    console.error(err)
	    return res.send(err);
	  } else {
		  console.log(stdout + stderr);
	   return res.send(stdout + stderr);
	  }
	});
});

app.post('/_action/reload', (req, res) => {
  console.log('POST /_action/reload')
  const { exec } = require('child_process');
	  exec('docker-compose -f ../docker-compose.yaml restart', (err, stdout, stderr) => {
	  if (err) {
	    console.error(err)
	    return res.send(err);
	  } else {
		  console.log(stdout + stderr);
	   return res.send(stdout + stderr);
	  }
	});
});

app.post('/_action/flush-redis', (req, res) => {
  console.log('POST /_action/flush-redis')
  const { exec } = require('child_process');
	  exec('docker exec redis redis-cli FLUSHALL', (err, stdout, stderr) => {
	  if (err) {
	    console.error(err)
	    return res.send(err);
	  } else {
		  console.log(stdout + stderr);
	   return res.send(stdout + stderr);
	  }
	});
});

// start express server at 8000 port
app.listen(80, () => {
  console.log('Server listening on port: ', 80);
});
