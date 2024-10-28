import express, { NextFunction, Request, Response } from "express";
import cors from "cors";

import { connectToDatabase } from "./database/database";
import { errorHandler } from "./middleware/errorhandle";
import routes from "./routes";
import { NotFoundError } from "./utils/erros/CommonError";

const PORT = 3200;
const app = express();

// Middleware
app.use(cors());
app.options("*", cors());

// Connect to the database
connectToDatabase();

// API Routes
app.use("/api", routes);

// Test Route
app.get("/test", (req: Request, res: Response) => {
  res.json({ status: 200, message: "Welcome from monorepo server" });
});

// Handle 404 Errors
app.use((req: Request, res: Response, next: NextFunction) => {
  next(new NotFoundError("Not Found"));
});

// // Global Error Handling
// app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
