// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connect = require('./db');
const taskRoutes = require('./taskRoutes');


const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

connect();

app.use('/api', taskRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
