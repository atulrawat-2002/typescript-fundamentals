import { Client } from "pg";
import express from "express";

const app = express();

const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "secret",
  database: "postgres",
});

await client.connect();

app.post("/user", async (req, res) => {
  try {
    const { id, name, email } = req.body;
    const response = await client.query(
      `INSERT INTO users (id, name, email) VALUES(${id}, ${name}, ${email})`,
    );
    res.json({
        message: response
    })
  } catch (error: any) {
    console.log(error.message)
    res.json({
        message: error.message
    })
  }
});

app.listen("8000", () => {
  console.log("app is listening onport no 8000");
});
