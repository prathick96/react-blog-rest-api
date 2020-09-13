require("./src/config/dbconfig");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const postRouter = require("./src/routers/postRouter");
const authorRouter = require("./src/routers/authorRouter");
const adminRouter = require("./src/routers/adminRouter");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>Blog API Server!</h1>");
});

app.use("/posts", postRouter);
app.use("/authors", authorRouter);
app.use("/admin", adminRouter);

app.listen(8080, () => {
  console.log("Server started");
});
