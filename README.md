# E-commerce Backend API

This is a simple backend API for a mini e-commerce platform using Node.js and Express.
It implements all required endpoints including the bonus cart and cart item management.

## Features

* **Product Management**

  * Create, read, update, delete products
* **Category Management**

  * Create, read, update, delete categories
* **Cart Management**

  * Create and delete carts
* **Cart Item Management**

  * Add, update, and list items in a cart

## Requirements

* Node.js (v14 or higher recommended)
* npm (Node package manager)

## How to Run

1. Clone the repository:

```bash
git clone https://github.com/AbdallahKhafagy7/app.git
```

2. Go into the project folder:

```bash
cd app
```

3. Install dependencies:

```bash
npm install
```

4. Start the server:

```bash
node app.js
```

The API will run at:

```
http://localhost:3000
```

## Testing Endpoints

You can test the API using:

* **Postman**
* **curl** commands

Example:

```bash
# Create a category
curl -X POST http://localhost:3000/api/categories \
-H "Content-Type: application/json" \
-d '{"name":"Electronics"}'

# Get all products
curl http://localhost:3000/api/products
```

All endpoints follow RESTful conventions:

* `GET /api/products` → list all products
* `POST /api/products` → create product
* `PATCH /api/products/:id` → update product
* `DELETE /api/products/:id` → delete product
  (and similarly for categories, carts, and cart items)

## Bonus: Testing Cart and CartItem Endpoints

* **Create a cart:**

```bash
curl -X POST http://localhost:3000/api/cart -H "Content-Type: application/json" -d '{"user":"John"}'
```

* **Add an item to a cart:**

```bash
curl -X POST http://localhost:3000/api/cartItems/1 -H "Content-Type: application/json" -d '{"productId":1,"quantity":2}'
```

* **Get all items in a cart:**

```bash
curl http://localhost:3000/api/cartItems/1
```

* **Update a cart item:**

```bash
curl -X PATCH http://localhost:3000/api/cartItems/1 -H "Content-Type: application/json" -d '{"quantity":3}'
```

* **Delete a cart:**

```bash
curl -X DELETE http://localhost:3000/api/cart/1
```
