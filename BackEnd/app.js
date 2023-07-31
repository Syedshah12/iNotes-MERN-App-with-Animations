const express = require('express');
const userRoutes = require("./routes/authUser.js");
const notesRoutes = require("./routes/notes.js");
const app=express();
var cors = require('cors')
const User=require('./models/user.js');
require('./db/connect');
const PORT=process.env.PORT || 5000;




//middlewares
app.use(cors())
app.use(express.json());
app.use("/api/v1", userRoutes);
app.use("/api/v1", notesRoutes);











app.listen(PORT,()=>{
    console.log(`listening to port ${PORT}`);
})