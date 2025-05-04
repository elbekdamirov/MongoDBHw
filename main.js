const express = require("express");
const dotenv = require("dotenv");
const mainRotuer = require("./routes/index.routes");
const mongoose = require("mongoose");

dotenv.config();

let PORT = process.env.PORT || 3030;

let app = express();

app.use(express.json());
app.use("/api", mainRotuer);

async function bootstrap() {
  try {
    await mongoose.connect(process.env.DB_URI);
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
}

bootstrap();
