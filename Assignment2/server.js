import express from "express";
import routes from "./routes/routes.js";
import connectDB from "./connection.js";

const app = express();
const PORT = 5000;

connectDB();

//middleware to get log requests
const logRequests = (req, res, next) => {
  res.on("finish", () => {
    const method = req.method;
    const url = req.url;
    const statusCode = res.statusCode;

    console.log(` ${method} ${url} - Status: ${statusCode} -`);
  });

  next();
};

app.use(logRequests);

app.use(express.json());

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
