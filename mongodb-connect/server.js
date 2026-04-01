
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
// middleware
app.use(cors());
app.use(express.json());
// routes
app.use('/api/auth',  require('./routes/auth'));
app.use('./api/restaurants',  require('./routes/restaurants'));
app.use('./api/cart',  require('./routes/cart'));
app.use('./api/orders',  require('./routes/orders'));
app.use('./api/delivery',  require('./routes/delivery'));

// test route
app.get('/', (req, res)=>{
  res.json({ message: 'Food Delivery API running'});
});

mongoose.connect(process.env.MONGO_URL)
.then(() =>{

 console.log("MongoDB Connected");
 app.listen(process.env.PORT, ()=>{
  console.log(`Server running on port ${process.env.PORT}`);
 });
})
.catch((err) => console.log("DB Error:", err));

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(5000)  // only runs after MongoDB says "I'm ready"
  })

