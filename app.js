var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors"); // Import cors package
var sequelize = require("./config/database");
var authRouter = require("./routes/auth");
var usersRouter = require("./routes/users"); // Import users router
var { errorHandler, notFoundHandler } = require("./middlewares/errorHandler"); // Đảm bảo import đúng cách

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors()); // Enable CORS for all origins

app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter); // Add users router

// catch 404 and forward to error handler
app.use(notFoundHandler); // Sử dụng hàm middleware notFoundHandler

// error handler
app.use(errorHandler); // Sử dụng hàm middleware errorHandler

// Kết nối tới database và đồng bộ model
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    return sequelize.sync();
  })
  .then(() => {
    console.log("Database synchronized.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = app;