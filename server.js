const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

const connectDB = require("./config/database");

const mainRoutes = require("./routes/main")

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

//Connect To Database
connectDB();

// Setup Sessions - stored in MongoDB
app.use(
    session({
      secret: "keyboard cat",
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
);

//The current set up maintains Model-View-Controller (MVC) rules (Omitting the View being in Pt2). It allows the data to be easily managed and allows code snipped to be easily reused.
app.use("/", mainRoutes)

app.listen(process.env.PORT, () => {
    console.log("Server is running on localhost 7777, better go catch it.")
})