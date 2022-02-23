import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./app/routes";
import databaseConfiguration from "./app/config/database.config";
import database from "./app/models";

const app = express();

const corsOptions = { origin: "http://localhost:8081" };
app.use(cors(corsOptions));
app.use(bodyParser.json()); //to parse requests of content type - application/json
app.use(bodyParser.urlencoded({ extended: true })); //parse requests of content-type - application/x-www-form-urlencoded
function initial() {}
database.mongoose
  .connect(
    `mongodb+srv://${databaseConfiguration.USER}:${databaseConfiguration.PASSWORD}@cluster0.m0uua.mongodb.net/${databaseConfiguration.NAME}?retryWrites=true&w=majority`,
    {
      //useNewUrlParser: true,
      //useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Successfully connected to the MongoDB database!");
    initial();
  })
  .catch((err: any) => {
    console.error("Connection error", err);
    process.exit();
  });
app.use("/", routes);
// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  res.status(404).send({ error: "Route not found" });
  next();
});
// app.get("/", (req, res) => {
//     res.json({ message: "Welcome to ugos server." });
// });

// Port that listens for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
