const express = require('express');
const app = express();

app.use(express.json());

// In-memory data storage
let products = [];
let categories = [];
let carts = [];
let cartItems = [];

// Product Management
app.post('/api/products', function (req, res) {
    const product = {
        id: Date.now().toString(),
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        categoryId: req.body.categoryId
    };
    products.push(product);
    res.status(201).json(product);
});

app.get('/api/products', function (req, res) {
    res.json(products);
});

app.get('/api/products/:id', function (req, res) {
    const product = products.find(function (p) { return p.id === req.params.id; });
    if (!product) {
        res.status(404).send('Not found');
    } else {
        res.json(product);
    }
});

app.patch('/api/products/:id', function (req, res) {
    const product = products.find(function (p) { return p.id === req.params.id; });
    if (!product) {
        return res.status(404).send('Not found');
    }
    if (req.body.name !== undefined) product.name = req.body.name;
    if (req.body.price !== undefined) product.price = req.body.price;
    if (req.body.description !== undefined) product.description = req.body.description;
    if (req.body.categoryId !== undefined) product.categoryId = req.body.categoryId;
    res.json(product);
});

app.delete('/api/products/:id', function (req, res) {
    products = products.filter(function (p) { return p.id !== req.params.id; });
    res.sendStatus(204);
});

// Category Management
app.post('/api/categories', function (req, res) {
    const category = {
        id: Date.now().toString(),
        name: req.body.name
    };
    categories.push(category);
    res.status(201).json(category);
});

app.get('/api/categories', function (req, res) {
    res.json(categories);
});

app.get('/api/categories/:id', function (req, res) {
    const category = categories.find(function (c) { return c.id === req.params.id; });
    if (!category) {
        res.status(404).send('Not found');
    } else {
        res.json(category);
    }
});

app.patch('/api/categories/:id', function (req, res) {
    const category = categories.find(function (c) { return c.id === req.params.id; });
    if (!category) {
        return res.status(404).send('Not found');
    }
    if (req.body.name !== undefined) category.name = req.body.name;
    res.json(category);
});

app.delete('/api/categories/:id', function (req, res) {
    categories = categories.filter(function (c) { return c.id !== req.params.id; });
    res.sendStatus(204);
});

// Cart Management
app.post('/api/cart', function (req, res) {
    const cart = {
        id: Date.now().toString(),
        user: req.body.user
    };
    carts.push(cart);
    res.status(201).json(cart);
});

app.delete('/api/cart/:id', function (req, res) {
    carts = carts.filter(function (c) { return c.id !== req.params.id; });
    cartItems = cartItems.filter(function (ci) { return ci.cartId !== req.params.id; });
    res.sendStatus(204);
});

app.get('/api/cartItems/:cartId', function (req, res) {
    const items = cartItems.filter(function (ci) { return ci.cartId === req.params.cartId; });
    res.json(items);
});

// CartItem Management
app.post('/api/cartItems/:cartId', function (req, res) {
    const item = {
        id: Date.now().toString(),
        cartId: req.params.cartId,
        productId: req.body.productId,
        quantity: req.body.quantity
    };
    cartItems.push(item);
    res.status(201).json(item);
});

app.get('/api/cartItems/item/:cartItemId', function (req, res) {
    const item = cartItems.find(function (ci) { return ci.id === req.params.cartItemId; });
    if (!item) {
        res.status(404).send('Not found');
    } else {
        res.json(item);
    }
});

app.patch('/api/cartItems/:cartItemId', function (req, res) {
    const item = cartItems.find(function (ci) { return ci.id === req.params.cartItemId; });
    if (!item) {
        return res.status(404).send('Not found');
    }
    if (req.body.productId !== undefined) item.productId = req.body.productId;
    if (req.body.quantity !== undefined) item.quantity = req.body.quantity;
    res.json(item);
});

app.get('/', function (req, res) {
    res.send('E-commerce API is running');
});

app.listen(3000, function () {
    console.log('Server running on port 3000');
});