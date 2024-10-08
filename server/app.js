// index.js

const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
const { setupSwagger } = require('./swagger/index.js')
setupSwagger(app);