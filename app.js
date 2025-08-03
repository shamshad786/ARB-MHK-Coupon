const express = require("express");
const cors = require("cors");

const dotenv = require("dotenv");
const dbConnection = require("./db");
const app = express();
const port = process.env.PORT || 5002;
const router = require("./router/subscriber.routes");

dotenv.config();

dbConnection()

app.use(cors());
const corsOption = {
  origin: [
    "http://localhost:3000",
    "http://localhost:9090",
    "https://bhartiyaaviation.in",
    "http://localhost:5173",
    "http://localhost:3001",
    "http://localhost:5174",
  ],
};

app.use(cors(corsOption));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "Content-Type",
    "Authorization"
  );
  next();
});
app.use(express.json());
app.disable("etag");

app.use('/api/v1',router)

app.use('/', (req,res)=>{
    res.send('Server is running!!');
});

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    status: 'error',
    message: err.message || 'Internal Server Error',
  });
});

// app.use(globalErrorHandler)

app.listen(port, () => {
  console.log("server is running", port);
});
