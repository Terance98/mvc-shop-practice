exports.getIndexPage = (req, res, next) => {
    res.render('index');
}

exports.getProductsPage = (req, res ,next) => {
    res.render('products');
}

exports.getCartPage = (req, res, next) => {
    res.render('cart');
}