const express = require("express");
require('dotenv').config();
const router = require("./src/routers/users");
const app = express();
const cors = require('cors');

// Allow specific headers and origins
app.use(cors({
  origin: '*', // Adjust this to match your client's origin
  allowedHeaders: ['Content-Type', 'Authorization'] // Allow both Content-Type and Authorization headers
}));
app.use(express.json());
app.use(router);



const Port = process.env.PORT_NUM ;
app.listen(Port, () => {
  console.log("\x1b[32m", `Server is Started on Port ${Port}`, "\x1b[37m");
});
