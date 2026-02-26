const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("If you're seeing this then the CI/CD Pipeline is Successful 🚀");
});

app.listen(3000, () => {
  console.log("Running on port 3000");
});
