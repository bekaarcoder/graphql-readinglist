const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const schema = require("./schema/schema");

const app = express();

// connect to mongodb
mongoose.connect("mongodb://localhost:27017/bookstore", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// check if connection is successful
mongoose.connection.once("open", () => {
  console.log("Connected to database.");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

const port = 4000;

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
