const express = require('express')
const app = express()
const newRoute = require ("./routes/new.route.js");
const port = 3000
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`BattleShip app listening on port ${port}`)
  })

app.use ("/battleship/new", newRoute);

app.get('/', (req, res, next) => {
    console.log("test");
    next()
 },(req, res)=>{
   res.send('Hello Chained Get Request!')
 })
