const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Node.js App Deployed using Jenkins + Docker 🚀");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

