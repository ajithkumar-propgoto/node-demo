const http = require('http')
const fs = require('fs')

const homePage = fs.readFileSync('./index.html')
const homeStyle=fs.readFileSync('./styles.css')
const homeLogic = fs.readFileSync('./browser-app.js')
const homeLogo = fs.readFileSync('./logo.svg')


const server = http.createServer((req,res) => {
    const url = req.url
    console.log(url)
    if (url === '/') {
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(homePage);
        res.end();
    }
    else if (url === '/styles.css') {
        res.writeHead(200,{'content-type':'text/css'});
        res.write(homeStyle);
        res.end();
    }
    else if (url === '/browser-app.js') {
        res.writeHead(200,{'content-type': 'text/javascript'});
        res.write(homeLogic);
        res.end();
    }
    else if(url === '/logo.svg') {
        res.writeHead(200,{'content-type':'image/svg+xml'})
        res.write(homeLogo)
        res.end();
    }
    else if (url === '/about') {
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('<div><h1>about</h1><button>click</button></div>')
        res.end()
    }
    else if (url === '/contact') {
        res.end("contact page");
    }
    else {
        res.end("404, res not found");
    }
})

server.listen(5000, ()=> {
    console.log("server listening");
})