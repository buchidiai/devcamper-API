const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const cookieParser = require("cookie-parser");
const fileupload = require("express-fileupload");
mongoSanitize = require("express-mongo-sanitize");

const errorHandler = require("./middleware/error");
const connectDB = require("./config/db");

//Load config
dotenv.config({ path: "./config/config.env" });

//conect to Database
connectDB();

//Route Files
const bootcamps = require("./routes/bootcamps");
const courses = require("./routes/courses");
const auth = require("./routes/auth");
const users = require("./routes/users");
const reviews = require("./routes/reviews");

const app = express();

if (process.env.NODE_ENV === "development") app.use(morgan("dev")); //dev logging middleware

//Body parser
app.use(express.json());
// Cookie parser
app.use(cookieParser());

//santize data
app.use(mongoSanitize());

// File uploading
app.use(fileupload());
// Set static folder
app.use(express.static(path.join(__dirname, "public")));

//mount routers
app.use("/api/v1/bootcamps", bootcamps);
app.use("/api/v1/courses", courses);
app.use("/api/v1/auth", auth);
app.use("/api/v1/users", users);
app.use("/api/v1/reviews", reviews);

app.use(errorHandler); //error handler

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold
  );
});

//Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.bgRed.bold);
  //close server & exit process
  server.close(() => process.exit(1));
});
