import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

export const getAllProducts = async (req, res) => {
    try {
        const products = await client.product.findMany();
        res.json({
            status: "success",
            data: products,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Failed to fetch products",
        });
    }
};

export const getProductById = async (req, res) => {
    const { productId } = req.params;

    try {
        const product = await client.product.findUnique({
            where: { id: productId }, 
        });

        if (!product) {
            return res.status(404).json({
                status: "error",
                message: "Product not found",
            });
        }

        res.json({
            status: "success",
            data: product,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Failed to fetch product",
        });
    }
};

export const createProduct = async (req, res) => {
    const { productTitle, productDescription, unitsLeft, pricePerUnit, isOnOffer } = req.body;

    if (!productTitle || !productDescription || unitsLeft < 0 ) {
        return res.status(400).json({
            status: "error",
            message: "Invalid input data. Please check the fields.",
        });
    }

    try {
        const product = await client.product.create({
            data: {
                productTitle,
                productDescription,
                unitsLeft,
                pricePerUnit,
                isOnOffer,
            },
        });

        res.status(201).json({
            status: "success",
            data: product,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Failed to create product",
        });
    }
};

export const updateProduct = async (req, res) => {
    const { productId } = req.params;
    try {
        const updatedProduct = await client.product.update({
            where: { id: productId },
            data: {
                productTitle,
                productDescription,
                unitsLeft,
                pricePerUnit,
                isOnOffer,
            },
        });

        res.json({
            status: "success",
            data: updatedProduct,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Failed to update product",
        });
    }
};

export const deleteProduct = async (req, res) => {
    const { productId } = req.params;

    try {
        await client.product.delete({
            where: { id: productId },
        });

        res.status(204).send();  
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Failed to delete product",
        });
    }
};

export const getProductsOnOffer = async (req, res) => {
    try {
        const products = await client.product.findMany({
            where: { isOnOffer: true },
        });

        res.json({
            status: "success",
            data: products,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Failed to fetch products on offer",
        });
    }
};
