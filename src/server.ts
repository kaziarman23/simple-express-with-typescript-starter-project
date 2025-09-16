import mongoose from "mongoose";
import app from "./app";
import config from "./app/configs";

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("Connected to MongoDB successfully! 🍃");

    app.listen(config.port, () => {
      console.log(`Book Store app listening on port ${config.port}`);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
}

main();
