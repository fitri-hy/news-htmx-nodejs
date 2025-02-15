const express = require("express");
const path = require("path");
const appConfig = require("./config/app");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const webRoutes = require("./routes/web");
app.use("/", webRoutes);

app.listen(appConfig.port, () => {
  console.log(`Server running at http://localhost:${appConfig.port}`);
});
