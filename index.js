const express = require('express');
const app = express();

//app.use(express.static('public'));





app.listen(process.env.PORT, () => {
  console.log('Server running at http://localhost:3000');
});