const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client", "build")));

// CONNECT TO MDB
const uri = config.get("MONGODB_URI");
mongoose.set("useFindAndModify", false);
mongoose.connect(uri, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
	console.log("MDB connection established successfully");
});

// ROUTES
// add routes and connect to static build:
app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

// LISTEN ON PORT
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
	console.log(`Listening on port: ${PORT}`);
});
