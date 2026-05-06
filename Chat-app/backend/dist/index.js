import express from "express";
import Razorpay from "razorpay";
const app = express();
const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});
app.post('/payments/create', async (req, res) => {
    try {
        const order = await instance.orders.create({
            "amount": 5000,
            "currency": "INR",
            "notes": {
                "firstName": "Atul",
                "lastName": "Rawat",
                "membershipType": "Premium"
            }
        });
        res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
        res.json({
            order,
            key: process.env.RAZORPAY_KEY_ID
        });
    }
    catch (error) {
        console.log(error.message);
    }
});
app.listen(8000, () => {
    console.log('App is listening on port no. 8000');
});
//# sourceMappingURL=index.js.map