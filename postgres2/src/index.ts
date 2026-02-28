import express from "express";
import client from "./db.js";
import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(morgan("dev"))

app.get("/", (req, res) => {
  res.json({
    message: "Server is running",
  });
});

app.post('/login', async(req, res) => {
    const { name, email, address } = req.body; 
    const {id: addId, city, pin} = address;
    
    const userInsertQuery = `INSERT INTO users (name, email) values($1, $2) RETURNING id;`
    const addressInsertQuery = `INSERT INTO address (id, city, pin, user_id) values($1, $2, $3, $4);`

    // await client.query('BEGIN;')

    let result:any = await client.query(userInsertQuery, [name, email]);
    await new Promise(x => setTimeout(x, 100000));
    let user_id = result.rows[0].id;
    console.log(result);
    result = await client.query(addressInsertQuery, [addId, city, pin, user_id]);

    // await client.query("COMMIT;")


    res.json({
      message: result
    })

})

app.get('/user', async(req, res) => {
    let result = await client.query(`SELECT * FROM users u left join address a on a.user_id = u.id;`)
    res.json({
        message: result.rows
    })
})

app.get('/users', async(req, res) => {
    const user_id = req.query.id;

    const userquery = `SELECT * FROM users WHERE id=$1;`
    const addresssQuery = `SELECT * FROM address WHERE user_id=$1;`

    let result1:any = await client.query(userquery, [user_id]);
    console.log(result1);
    
    let result2 = await client.query(addresssQuery, [user_id]);
    console.log(result2)

    res.json({
      message: {
        user: result1.rows,
        address: result2.rows
      }
    })

})

try {
  await client.connect()
  console.log("Database connected");
  app.listen(3000, () => {
    console.log("App is listening on port number 3000");
  });
} catch (error: any) {
  console.log(error.message);
}
