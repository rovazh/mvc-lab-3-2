const renderPage = () => {
    return `
        <html lang=”pl”>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport"content="width=device-width, initial-scale=1.0">
                <title>home.js</title>
            </head>
            <body>
                <form action="/student" method="POST">
                    <label for="firstname">Imię :</label>
                    <input type="text" name="firstname" id="firstname">
                    <label for="lastname">Nazwisko :</label>
                    <input type="text" name="lastname" id="lastname">
                    <label for="age">Wiek :</label>
                    <input type="number" name="age" id="age">
                    <label for="gender">Płeć :</label>
                    <select name="gender" id="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <label for="age">Numer albumu:</label>
                    <input type="number" name="code" id="code">
                    <label for="studyField">Kierunek :</label>
                    <input type="text" name="studyField" id="studyField">
                    <input type="submit">
                </form>
            </body>
        </html>
    `;
}

module.exports = { renderPage };
