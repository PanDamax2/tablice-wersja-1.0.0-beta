const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT

app.use(express.static(path.join(__dirname)));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});