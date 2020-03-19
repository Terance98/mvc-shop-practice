const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rootPath = require(path.join(__dirname, 'components', 'path'));
const port = 4000;

const app = express();

const shopRoutes = require(path.join(rootPath, 'routes', 'shop_routes'));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootPath, 'views')));

app.use(shopRoutes);
app.use((req, res, next) => {
    res.send("<h1>The page was not found :(</h1>");
});

app.listen(port, () => console.log(`App listening on port ${port}`));