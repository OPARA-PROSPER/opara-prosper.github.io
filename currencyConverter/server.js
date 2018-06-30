
const express = require('express');
const app = express();
const port = 4000;

app.use(express.static('view'));

app.get('/', (request, response) => {
    response.sendFile(__dirname + 'index.html');
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
})

