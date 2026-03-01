import express from "express";
import './db.js';
import { User } from "./models.js";
import morgan from "morgan";


const app = express()
app.use(morgan("combined"))


app.get('/users', async(req, res) => {

    const limit = 5;
    const page: any = req.query?.page || 1;
    const sortBy: any = req.query?.sortBy || 'createdAt';
    const order = req.query?.order === 'asc' ? 1: -1;

    const offset = (page - 1) * limit;

    const result: any = await User.find({})
    .sort({[sortBy]: order})
    .skip(offset)
    .limit(5);

    res.json({
        data: result,
    })


})



app.listen(8000, () => {
    console.log('App is listening on port number 8000')
})