require("dotenv").config();
const Express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

const app = Express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  session({
    secret: "keyBoard-cat",
    cookie: { maxAge: 24 * 60 * 60 },
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
    }),
  })
);

const mongoDBConfig = {
  url: "mongodb://localhost/digitalab",
  dbName: "digitalab",
};
mongoose.connect(mongoDBConfig.url, { useNewUrlParser: true });

// const db = mongoose.connection;
// db.once("open", (_) => {
//   console.log("Database connected:", mongoDBConfig.url);
// });

// db.on("error", (err) => {
//   console.error("connection error:", err);
// });

const index = require("./routes/index");
app.use("/", index);

const auth = require("./routes/auth");
app.use("/auth", auth);

app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});
