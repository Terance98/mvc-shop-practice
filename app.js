const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = 4000;

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'views')));
 

app.get("/", (req,res,next) => {
    res.render('index')
});


app.listen(port, ()=> console.log(`App listening on port ${port}`));