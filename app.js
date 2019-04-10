const express = require('express');
const bodyP = require('body-parser');
const cookieP = require('cookie-parser');
   
const app = express();
app.use(bodyP.urlencoded({ extended: false })).use(cookieP());
   
// Your handlers go here
app.use('/s', express.static('public'));

app.get('/signin', function(req, res) {
 res.sendFile(__dirname + '/public/form.html');
});
   
app.listen(process.env.PORT);