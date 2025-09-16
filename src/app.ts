import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./app/modules/Product/product.route";
import { OrderRoutes } from "./app/modules/Order/order.route";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import notFound from "./app/middleware/notFound";

const app: Application = express();

// Parsers
app.use(express.json());
app.use(cors());

// Application routes
app.use("/api/products", ProductRoutes);
app.use("/api/orders", OrderRoutes);

// Root route
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Book Store API!");
});

// Global Error Handler and Not Found Middleware
app.use(globalErrorHandler);
app.use(notFound);

export default app;
