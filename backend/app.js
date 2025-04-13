const express = require('express')
const app = express()
const battleshipRoute = require ("./routes/battleship.route.js");
const port = 3000
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`BattleShip app listening on port ${port}`)
  })

app.use ("/battleship", battleshipRoute);

app.get('/', (req, res, next) => {
    console.log("test");
    next()
 },(req, res)=>{
   res.send('Hello Chained Get Request!')
 })
