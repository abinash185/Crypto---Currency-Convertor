const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;
const Route = require('./routes/route.js')
//const validateFormData = require('./middleware/validationMiddleware.js');


app.use(bodyParser.json());
app.use(cors());

//app.use(validateFormData); 
app.use('/',Route);

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "client", "build")));
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
  

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
