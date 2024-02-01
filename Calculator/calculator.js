const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    //console.log(parsedUrl);
    const { pathname, query } = parsedUrl;

    if (pathname === '/add') {
        res.end((parseInt(query.a) + parseInt(query.b)).toString());
    } else if (pathname === '/subtract') {
        res.end((parseInt(query.a) - parseInt(query.b)).toString());
    } else if (pathname === '/multiply') {
        res.end((parseInt(query.a) * parseInt(query.b)).toString());
    } else if (pathname === '/divide') {
        res.end((parseInt(query.a) / parseInt(query.b)).toString());
    } else {
        res.statusCode = 404;
        res.end('Invalid operation');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
