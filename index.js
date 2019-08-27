const port = process.env.port || 7000;
const express = require('express');
const app = express();
const ShopRoute = require('./routes/shop')
const CoffeeRoute = require('./routes/coffee')
app.use(express.json());
app.use(express.urlencoded({extended:false}));



app.use('/api',ShopRoute);
app.use('/api',CoffeeRoute);



app.use((req,res,next)=>{ res.status(404).json("404 not found");next();})


app.listen(port,()=>console.log(`app run on port ${port}`));