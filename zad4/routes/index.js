const homeView = require('../views/home');
const studentView = require('../views/student');
const fs = require('node:fs');

const handleHome = (req, res) => {
    res.write(homeView.renderPage());
    return res.end();
}

const handleStudent = async (req, res) => {
    let data = '';
    req.on('data', (chunk) => data += chunk.toString());
    req.on('end', () => {
        const formData = new URLSearchParams(data);
        fs.writeFileSync(`/tmp/${formData.get('code')}.txt`, data, 'utf-8');
        res.write(studentView.renderPage(
            formData.get('code'),
            formData.get('firstname'),
            formData.get('lastname'),
            formData.get('gender'),
            formData.get('age'),
            formData.get('studyField'),
        ));
        return res.end();
    });
}

module.exports = { handleHome, handleStudent };
