const mongoose=require('mongoose');


const connect=async ()=>{
try {
    const con = await mongoose.connect('mongodb://localhost:27017/INotes', {
           
    useNewUrlParser: true,
    useUnifiedTopology: true,
 
});
console.log('connected to db');
} catch (error) {
    console.log("there was an error connecting to db")
}
}
connect();
module.exports=connect;