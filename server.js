const express = require("express");
const cors = require("cors");

const logger = require("./src/middleware/logger");
const productRoutes = require("./routes/productRoutes");
const errorHandler = require("./src/middleware/errorHandler");

const app = express();

// ===============================
// MIDDLEWARE
// ===============================

// Enable CORS
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// Request logger
app.use(logger);

// ===============================
// ROOT ROUTE
// ===============================

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Week 4 REST API is running!"
    });
});
// ===============================
// PRODUCT ROUTES
// ===============================

app.use("/api/products", productRoutes);

// ===============================
// TEST ERROR ROUTE
// ===============================

app.get("/api/test-error", (req, res, next) => {
    const error = new Error("Test server error");
    error.statusCode = 500;
    next(error);
});

// ===============================
// 404 HANDLER
// ===============================

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

// ===============================
// GLOBAL ERROR HANDLER
// ===============================

app.use(errorHandler);
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});