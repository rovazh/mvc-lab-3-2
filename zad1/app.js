const http = require('node:http');
const homeView = require('./views/home');
const studentView = require('./views/student');

const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write(homeView.renderPage());
        return res.end();
    }
    if (req.url === '/student') {
        res.write(studentView.renderPage());
        return res.end();
    }
});

server.listen(PORT, () => console.log(`Server is running on ${PORT}`));
