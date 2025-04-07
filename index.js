const http = require('http');
const os = require('os');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  const message = {
    greeting: '🚀 Welcome to the CI/CD Pipeline Demo!',
    platform: os.platform(),
    architecture: os.arch(),
    uptime: `${Math.floor(os.uptime())} seconds`,
    timestamp: new Date().toISOString()
  };

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(message, null, 2));
});

server.listen(port, hostname, () => {
  console.log(`✅ Server running at http://${hostname}:${port}/`);
});
