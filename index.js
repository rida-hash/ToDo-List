const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', "ejs");

var items =[];

app.get('/', function(req, res){
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month:"long"
  };

  var day = today.toLocaleDateString("en-US", options);

  res.render('lists', { kindOfDay : day, newItems : items});
})

app.post('/', function(req, res){
  var item = req.body.newItems;
  items.push(item);
  res.redirect('/');
})

app.listen(3000, function(){
  console.log('Server running on port 3000');
});
