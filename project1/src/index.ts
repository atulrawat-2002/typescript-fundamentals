import express from "express";
import cookieParser from "cookie-parser";
import limiter from "./utils/limiter.js";
import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(cookieParser())
app.use(morgan("dev"))


app.get('/', limiter, (req, res) => {
 
        res.cookie('token', 'abc', {
            httpOnly: true,
            secure: true,
            maxAge: 10000,
            sameSite: 'strict'
        });
        res.json({
            message: 'Hi from server'
        })

})

app.post('/', (req, res) => {
    const {token} = req.cookies;
    console.log(token)
    res.json({
        message: token
    })
})

app.listen(8000, () => {
    console.log('App is listening on port number 8000')
})