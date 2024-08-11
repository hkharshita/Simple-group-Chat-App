const express = require('express');
const fs = require('fs');

const route = express.Router();

route.get('/', (req, res) => {

    let newMessage = "";
    newMessage = fs.readFileSync('message.txt', 'utf-8');
    newMessage = newMessage.split('\n');
    const formattedMsg = newMessage.map((line) => {
        return `<p>${line}</p>`;
    }).join('');

    res.send(`<div>${formattedMsg}</div>
       <form action='/' method='POST'>
        <input type='text' name='message' id='message'>
        <input type='hidden' name='username' id='username'>
        <br><br>
        <button type='submit'>Send</button>
       </form> 
       <script>
       
       document.addEventListener('DOMContentLoaded',(event)=>{
        event.preventDefault();
        const localData=localStorage.getItem('username');
        const hiddenInput=document.querySelector('#username');
        hiddenInput.value=localData;
        
        })
       </script>
       `);
});
route.post('/', (req, res) => {
  
    const msg = req.body.message;
    const username = req.body.username;
    const fullMsg = `${username}:${msg}\n`;
    fs.appendFileSync('message.txt', fullMsg, (err) => {
        res.status(500).send('Server Error');

    });
    res.redirect('/');
})




module.exports = route;