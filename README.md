# SIMPLE EXPRESS & TYPESCRIPT STARTER PROJECT

This is a robust RESTful API for a Book Store application, built with **Express.js**, **TypeScript**, and **MongoDB**. It provides a complete backend solution for managing products (books) and customer orders, featuring built-in inventory management and data validation.

---

## ✨ Project Objective

The primary goal of this project is to develop a scalable and efficient backend service that handles all core functionalities of an e-commerce book store. This includes creating, reading, updating, and deleting book records, processing customer orders while automatically adjusting inventory, and providing business insights like total revenue calculation.

---

## 🚀 Features

-   **Full CRUD for Books:** Complete Create, Read, Update, and Delete operations for book products.
-   **Advanced Search:** Search for books by title, author, or category.
-   **Order Management:** Process customer orders seamlessly.
-   **Smart Inventory Control:** Automatically decrements book quantity upon order and sets stock status. Prevents orders for out-of-stock items.
-   **Data Validation:** Uses Mongoose schemas to ensure data integrity and prevent invalid entries.
-   **Revenue Analytics:** An aggregation endpoint to calculate the total revenue from all orders.
-   **Global Error Handling:** A centralized error handling mechanism for consistent and descriptive error responses.

---

## 🛠️ Technology Stack

-   **Backend Framework:** Express.js
-   **Language:** TypeScript
-   **Database:** MongoDB
-   **ODM:** Mongoose
-   **Environment Variables:** `dotenv`
-   **Development Server:** `ts-node-dev`
-   **Linting & Formatting:** ESLint

---

## 📂 Project Structure

The project follows a modular, feature-based architecture to keep the code organized, scalable, and easy to maintain.

```
/
├── dist/                     # Compiled JavaScript output
├── src/
│   ├── app/
│   │   ├── modules/
│   │   │   ├── Product/      # Product-related files
│   │   │   └── Order/        # Order-related files
│   │   ├── config/           # Environment variables loader  
│   │   └── middleware/       # Global error handlers             
│   ├── app.ts                # Express application setup
│   └── server.ts             # Server entry point
├── .env                      # Environment variables
├── .eslintrc.js
├── .gitignore
├── package.json
└── tsconfig.json
```

---

## ⚙️ Local Setup and Installation

Follow these steps to get the project running on your local machine.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v16 or higher)
-   [MongoDB](https://www.mongodb.com/try/download/community) instance running locally or on a cloud service.

### Steps

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/kaziarman23/simple-express-with-typescript-starter-project.git
    cd simple-express-with-typescript-starter-project
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root directory and add the following variables. Replace the values with your own configuration.
    ```env
    PORT=5000
    DATABASE_URL=???
    ```

4.  **Run the development server:**
    ```bash
    npm run start:dev
    ```
    The server will start on the port you specified (e.g., `http://localhost:5000`).

---

## 🔌 API Endpoints

Here are the available API endpoints for the application.

### Product (Book) Endpoints

| Method   | Endpoint                    | Description                                        | Request Body Example                                     |
| :------- | :-------------------------- | :------------------------------------------------- | :------------------------------------------------------- |
| `POST`   | `/api/products`             | Creates a new book.                                | `{ "title": "...", "author": "...", "price": 10, ... }`   |
| `GET`    | `/api/products`             | Retrieves all books.                               | N/A                                                      |
| `GET`    | `/api/products?searchTerm=` | Searches for books by `title`, `author`, `category`. | N/A                                                      |
| `GET`    | `/api/products/:productId`  | Retrieves a single book by its ID.                 | N/A                                                      |
| `PUT`    | `/api/products/:productId`  | Updates a book's details.                          | `{ "price": 15, "quantity": 50 }`                        |
| `DELETE` | `/api/products/:productId`  | Deletes a book from the database.                  | N/A                                                      |

### Order Endpoints

| Method | Endpoint            | Description                               | Request Body Example                                         |
| :----- | :------------------ | :---------------------------------------- | :----------------------------------------------------------- |
| `POST` | `/api/orders`       | Creates a new order.                      | `{ "email": "...", "product": "...", "quantity": 2, ... }`   |
| `GET`  | `/api/orders/revenue` | Calculates total revenue from all orders. | N/A                                                          |

### Generic Error Response

In case of an error (e.g., validation failure, server error), the API will return a response in the following format:

```json
{
  "message": "Validation failed",
  "success": false,
  "error": {
    "name": "ValidationError",
    "errors": { "...details..." }
  },
  "stack": "Error: ... at ..."
}
```