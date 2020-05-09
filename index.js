var express = require("express"),
  app = express();

var todoRoutes = require("./routes/todos");

app.get("/", function (req, res) {
  res.send("HI!!!!");
});

app.use("/api/todos", todoRoutes);

app.listen(process.env.PORT || 3000, function () {
  console.log("Server has started!");
});
