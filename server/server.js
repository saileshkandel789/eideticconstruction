const express = require("express");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

const users = require("./routes/api/Users");
const contact = require("./routes/api/Contact");
const blog = require("./routes/api/Blog");
const service = require("./routes/api/Service");
const banner = require("./routes/api/Banner");
const booknow = require("./routes/api/BookNow");
const project = require("./routes/api/Project");
const team = require("./routes/api/Team");
const vdo = require("./routes/api/Vdo");
const category = require("./routes/api/Category");



const cors = require("cors");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// const __dirname = path.resolve();
app.use("/uploads", express.static(path.join("uploads")));

// DB config
const db = require("./config/keys").mongoURI;
const nodeenv =require("./config/keys").NODE_ENV;

// connect to mongodb
mongoose
  .connect(db)
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err));

// passport middleware
app.use(passport.initialize());

// passport config
require("./config/passport")(passport);

const port = process.env.PORT || 4000;
// To make uploads folder publically available with '/api/videos' route
app.use('/api/videos', express.static('media/uploads'));

app.use("/api/users", users);
app.use("/api/contact", contact);
app.use("/api/blog", blog);
app.use("/api/service", service);
app.use("/api/banner", banner);
app.use("/api/booknow", booknow);
app.use("/api/project", project);
app.use("/api/team", team);
app.use("/api/upload", vdo);
app.use("/api/category" , category);


// if (nodeenv === "production") {
//   app.use(express.static(path.join( '../client/build')))

//   app.get('*', (req, res) =>
//     res.sendFile(path.resolve( '../client', 'build', 'index.html'))
//   )
// }


app.listen(port, () => console.log(`server running on port ${port}`));
