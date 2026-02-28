import express from "express";
import cookieParser from "cookie-parser";
const app = express();
app.use(express.json());
app.use(cookieParser());
app.get('/', (req, res) => {
    res.cookie('token', 'abc', {
        httpOnly: true,
        secure: true,
        maxAge: 10000,
        sameSite: 'strict'
    });
    res.json({
        message: 'Hi from server'
    });
});
app.post('/', (req, res) => {
    const { token } = req.cookies;
    console.log(token);
    res.json({
        message: token
    });
});
app.listen(3000, () => {
    console.log('App is listening....');
});
//# sourceMappingURL=index.js.map