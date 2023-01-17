const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");


const app = express();
const PORT = 4000;

let idCounter = 5;

let users = [
    {name:"Hasan",surname:"Nuruzade",Email:"Hasan.Nuruzade@mail.ru"},
    {name:"Emin",surname:"Usubov",Email:"Emin.Usubov@mail.ru"},
    {name:"Resul",surname:"Pink",Email:"Resul.Pink@mail.ru"},
    {name:"Elvin",surname:"Noob",Email:"Elvin.Noob@mail.ru"}
];

app.use(cors());
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.send("<h1>Admin Panel</h1>");
});
// get All Users

app.get("/users",(req,res)=>{
    res.send(users);
})

// get user by id

app.get("/users/:name",(req,res)=>{
    const name= req.params.name;

    const selectUser= users.find(x=>x.name==name);

    if(selectUser){
        res.send(selectUser);
        res.status(200);  
    }
    else{
        res.status(404).json({message:"There is no user with this id"});
    }

});

// delete 

app.delete("/users/:name",(req,res)=>{
    const name = req.params.name;

    users=users.filter((x)=>x.name!==name)

    res.status(200).json({ message: "Deleted "});
});

// Add User

app.post("/users",(req,res)=>{
    const userObj = {
       
        name:req.body.name,
        surname:req.body.surname,
        Email:req.body.Email
    };

    users.push(userObj);;
    res.end();
});

// Update User

app.post("/users/:name",(req,res)=>{
    const {name} = req.params;

    users=users.filter(x=>x.name!=name);

    const updataUser={
        id:id,
        name:req.body.name,
        surname:req.body.surname,
        Email:req.body.Email
    };

    users.push(updataUser);
    res.end();

});

app.listen(PORT,()=>{
    console.log("Server runnig");
});