const express = require('express');
const app = express();
const userRouter = require('./routes/user');
const PORT = 3000;

app.use(mylogger);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendStatus(500);
    // res.send(html);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use('/user', userRouter);


function mylogger(req, res, next) {
    console.log('mylogger');
    next();
}




// const http = require('http');
// const html = require("fs").readFileSync("./index.html");

// Create an HTTP server
// const server = http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(html);
//   res.end();

//   if (req.method == "GET"){

//   }
//   if (req.method == "POST"){
//     let body = '';
//     req.on('data', chunk => {
//       body += chunk.toString(); // convert Buffer to string
//     });
//     req.on('end', () => {
//       console.log(body);
//     });
//   }
// });

// server.listen(PORT, () => {
//     console.log(`Server listening on: http://localhost:${PORT}`);
// });