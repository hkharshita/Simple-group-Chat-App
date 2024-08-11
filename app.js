const express=require('express');
const app=express();

const loginRoute=require('./routes/login');
const chatRoute=require('./routes/chat');


app.use(express.urlencoded({extended:true}));
app.use('/login',loginRoute);
app.use('/',chatRoute);

app.listen(5000);