const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response header with a status code and content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send response body
  res.end('Hello, World!\n');
});

// Define the port number to listen to
const PORT = 3000;

// Make the server listen on the specified port
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
