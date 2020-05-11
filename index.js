var express = require("express"),
  app = express(),
  bodyParser = require("body-parser");

var todoRoutes = require("./routes/todos");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.send("HI!!!!");
});

app.use("/api/todos", todoRoutes);

app.listen(process.env.PORT || 3000, function () {
  console.log("Server has started!");
});
