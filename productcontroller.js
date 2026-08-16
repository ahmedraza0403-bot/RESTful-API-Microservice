let products = [
    {
        id: 1,
        name: "Laptop",
        price: 85000,
        category: "Electronics",
        description: "A powerful laptop for everyday use"
    },
    {
        id: 2,
        name: "Smartphone",
        price: 55000,
        category: "Electronics",
        description: "A modern smartphone with excellent features"
    }
];

// ===============================
// GET ALL PRODUCTS
// ===============================

const getProducts = (req, res) => {
    res.status(200).json({
        success: true,
        count: products.length,
        data: products
    });
};

// ===============================
// GET PRODUCT BY ID
// ===============================

const getProductById = (req, res) => {
    const id = Number(req.params.id);

    const product = products.find((product) => product.id === id);

    if (!product) {
        return res.status(404).json({
            success: false,
            message: "Product not found"
        });
    }

    res.status(200).json({
        success: true,
        data: product
    });
};

// ===============================
// CREATE PRODUCT
// ===============================

const createProduct = (req, res) => {
    const newProduct = {
        id: products.length > 0
            ? Math.max(...products.map((product) => product.id)) + 1
            : 1,
        ...req.body
    };

    products.push(newProduct);

    res.status(201).json({
        success: true,
        message: "Product created successfully",
        data: newProduct
    });
};

// ===============================
// UPDATE PRODUCT
// ===============================

const updateProduct = (req, res) => {
    const id = Number(req.params.id);

    const index = products.findIndex((product) => product.id === id);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "Product not found"
        });
    }

    products[index] = {
        id,
        ...req.body
    };

    res.status(200).json({
        success: true,
        message: "Product updated successfully",
        data: products[index]
    });
};

// ===============================
// DELETE PRODUCT
// ===============================

const deleteProduct = (req, res) => {
    const id = Number(req.params.id);

    const index = products.findIndex((product) => product.id === id);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "Product not found"
        });
    }

    const deletedProduct = products.splice(index, 1)[0];

    res.status(200).json({
        success: true,
        message: "Product deleted successfully",
        data: deletedProduct
    });
};

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};