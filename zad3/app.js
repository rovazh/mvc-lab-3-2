const http = require('node:http');
const { handleHome, handleStudent } = require('./routes/index');

const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        return handleHome(req, res);
    }
    if (req.url === '/student') {
        return handleStudent(req, res);
    }
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 404;
    return res.end('Not found');
});

server.listen(PORT, () => console.log(`Server is running on ${PORT}`));
