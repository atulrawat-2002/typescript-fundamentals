import { Client } from "pg";
import express from "express";
const app = express();

app.use(express.json())
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
        const { name, email } = req.body;
        // const response = await client.query(`INSERT INTO users (name, email) VALUES('${name}', '${email}')`);
        const response = await client.query('SELECT * FROM users;')
        res.json({
            message: response
        });
    }
    catch (error) {
        console.log(error.message);
        res.json({
            message: error.message
        });
    }
});
app.listen("8000", () => {
    console.log("app is listening onport no 8000");
});
//# sourceMappingURL=index.js.map