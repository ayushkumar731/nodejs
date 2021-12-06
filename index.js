const express = require('express');
const app = express();

const port = 3000;

app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(port, (err, res) => {
  if (err) {
    console.log(`error to fire up the server: ${err}`);
    return;
  }
  console.log(`server is running on port : ${port}`);
});

module.exports = app;