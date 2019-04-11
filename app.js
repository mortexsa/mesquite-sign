const express = require('express');
const bodyP = require('body-parser');
const cookieP = require('cookie-parser');

const consolidate = require('consolidate');


const app = express();
app.use(bodyP.urlencoded({ extended: false })).use(cookieP());
app.engine('html', consolidate.nunjucks);
app.set('view engine', 'nunjucks');
// Your handlers go here
app.use('/s', express.static('public'));

app.get('/signin', function(req, res) {
 res.sendFile(__dirname + '/public/form.html');
});

app.get('/hello', function(req, res) {
  //res.send(req.query);
  res.render('hello.html', { 'info' : req.query,
                             'red' : ['cherry', 'strawberry', 'blood'],
                             'yellow' : ['sun', 'lemon', 'banana']
                           });
});
   
app.listen(process.env.PORT);