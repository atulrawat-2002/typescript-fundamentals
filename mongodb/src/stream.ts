import express from "express";
import fs from "fs";
import status from "express-status-monitor";
import { toASCII } from "punycode";

const app = express();

app.use(status())

app.get('/', async (req, res) => {

    const stream = fs.createReadStream("src/sample.txt", "utf-8");
    stream.on('data', (chunk) => {
        res.write(chunk);
    })
    stream.on('end', () => {
        res.end();
    })

})


app.listen(3000, () => {
    console.log("App is listening on port number 3000")
})