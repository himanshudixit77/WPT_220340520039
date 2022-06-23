const express = require('express');
const app = express();
const mysql=require("mysql2");
 let himanshu1={
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'kanpur',
	port:3306
};

const con=mysql.createConnection(himanshu1);

app.use(express.static("sf"));

app.listen(900,function(){
    console.log("server listening at portnumber 900");
});

app.get("/getDetail",(req,res)=>{

let bookid=req.query.bookid;
let bookname=req.query.bookname;
let price=req.query.price;

let pin={status:false,bookdetail:{bookid:0,bookname:"",price:0}};

con.query("insert into book  values(?,?,?)",[bookid,bookname,price],(err,rows)=>{
if(err)
console.log("error has happend kindly see");
else
{
    if(rows.affectedRows>0)
    {
        pin.status=true;
        console.log(rows[0]);
        pin.bookdetail=rows[0];
        console.log(rows.affectedRows);
    }

}
    res.send(pin);

});
});