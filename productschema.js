const { z } = require("zod");

const productSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, "Product name must be at least 2 characters"),

    price: z
        .number()
        .positive("Price must be greater than 0"),

    category: z
        .string()
        .trim()
        .min(2, "Category is required"),

    description: z
        .string()
        .trim()
        .min(5, "Description must be at least 5 characters")
});

module.exports = productSchema;