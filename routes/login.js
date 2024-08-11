const express = require('express');
const route = express.Router();
route.get('/', (req, res) => {
    res.send(`<form action='/' method='POST'>
        <label for='username'>Username:</label>
        <input id='username' name='username' type='text'>
        <button type='submit'>Login</button>
        </form>
        <script>
         const form=document.querySelector('form');
    
         form.addEventListener('submit',(event)=>{
      event.preventDefault();
            const user=document.getElementById('username');
         localStorage.setItem('username',user.value); 
         window.location.href='/';
            })
       
        </script>`);
});
module.exports = route;
