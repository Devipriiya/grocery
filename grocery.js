import express from "express";
import oilmasala from "./oilmasala.js";
import households from "./households.js";
import beauty from "./beauty.js";
import snacks from "./snacks.js";
import beverages from "./beverages.js";
import babycare from "./babycare.js";
import connectDB from "./db.js";
connectDB();
const app=express();
app.use(express.json());
app.use('/oilmasala',oilmasala);
app.use('/households',households);
app.use('/beauty',beauty);
app.use('/snacks',snacks);
app.use('/beverages',beverages);
app.use('/babycare',babycare);

const port=5000;
app.listen(port,()=>{
    console.log(`server is running at ${port}`);
 
});
