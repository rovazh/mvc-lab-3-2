const homeView = require('../views/home');
const studentView = require('../views/student');

const handleHome = (req, res) => {
    res.write(homeView.renderPage());
    return res.end();
}

const handleStudent = (req, res) => {
    res.write(studentView.renderPage());
    return res.end();
}

module.exports = { handleHome, handleStudent };
