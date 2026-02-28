import { createRequire as _createRequire } from "module";
const __require = _createRequire(import.meta.url);
const mongoose = __require("mongoose");
import { Order, User } from "./models.js";
const client = await mongoose.connect('mongodb+srv://Initiation:oIbJe1jkQCYrsGIa@namastenodejs.ecrw1k1.mongodb.net/practice');
// const users: any = await User.insertMany([
//   {
//     name: "Atul",
//     age: 23,
//     email: "atul@example.com",
//     role: "admin"
//   },
//   {
//     name: "Ravi",
//     age: 26,
//     email: "ravi@example.com",
//     role: "user"
//   },
//   {
//     name: "Priya",  
//     age: 24,
//     email: "priya@example.com",
//     role: "user"
//   }
// ]);
// await Order.insertMany([
//   {
//     user: users[0]._id,
//     items: [
//       { productName: "Laptop", quantity: 1, price: 50000 },
//       { productName: "Mouse", quantity: 2, price: 500 }
//     ],
//     totalAmount: 51000,
//     status: "completed"
//   },
//   {
//     user: users[0]._id,
//     items: [
//       { productName: "Keyboard", quantity: 1, price: 2000 }
//     ],
//     totalAmount: 2000,
//     status: "pending"
//   },
//   {
//     user: users[1]._id,
//     items: [
//       { productName: "Phone", quantity: 1, price: 30000 }
//     ],
//     totalAmount: 30000,
//     status: "completed"
//   },
//   {
//     user: users[2]._id,
//     items: [
//       { productName: "Headphones", quantity: 2, price: 1500 }
//     ],
//     totalAmount: 3000,
//     status: "cancelled"
//   }
// ]);
let result = await User.find({
    $or: [{ age: { $gt: 25 } }, { role: { $nin: ['moderator', 'participant'] } }]
});
console.log(result);
//# sourceMappingURL=db.js.map