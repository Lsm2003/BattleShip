const express = require('express')
const app = express()
const newRoute = require ("./routes/new.route.js");
const lobRoute = require ("./routes/lob.route.js");
const missRoute = require ("./routes/miss.route.js");
const hitRoute = require ("./routes/hit.route.js");
const concedeRoute = require ("./routes/concede.route.js");
const cancelRoute = require ("./routes/cancel.route.js");
const port = 3000
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`BattleShip app listening on port ${port}`)
  })

app.use ("/battleship/new", newRoute);
app.use ("/battleship/lob", lobRoute);
app.use ("/battleship/miss", missRoute);
app.use ("/battleship/hit", hitRoute);
app.use ("/battleship/concede", concedeRoute);
app.use ("/battleship/cancel", cancelRoute);

app.get('/', (req, res, next) => {
    console.log("test");
    next()
 },(req, res)=>{
   res.send('Hello Chained Get Request!')
 })
