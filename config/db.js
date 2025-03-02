const mysql= require("mysql2/promise");

const db= mysql.createPool({
    host:"localhost",
    user: "root",
    password:"20032009",
    database: "chaptercircle"
});


const connectdb= async()=>{
    try{
        await db.getConnection();
        console.log("Database connected");  
    } catch(err)
    {
        console.log(err);
        console.log("Database connection failed");
    }
};

connectdb();


module.exports=db;