const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const colors = require("colors");

const userRoutes = require("./routes/userRoutes");

const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(colors.cyan.underline("DB Connection Successful"))
}).catch((err) => {
    console.log(colors.red.underline(err.message))
})

const server = app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
})