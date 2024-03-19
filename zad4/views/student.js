const renderPage = (index, firstname, lastname, gender, age, studyField) => {
    return `
        <html lang=”pl”>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport"content="width=device-width, initial-scale=1.0">
                <title>Student profile</title>
            </head>
            <body>
                <p>Numer albumu: ${index}</p>
                <p>Imię: ${firstname}</p>
                <p>Nazwisko: ${lastname}</p>
                <p>Płeć: ${gender}</p>
                <p>Wiek: ${age}</p>
                <p>Wierunek: ${studyField}</p>
            </body>
        </html>
    `;
}

module.exports = { renderPage };
