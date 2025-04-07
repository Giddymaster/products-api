export function validateProduct(req, res, next) {
    const { productTitle, productDescription, unitsLeft, pricePerUnit } = req.body;

    if (!productTitle ) {
        return res.status(400).json({
            status: "error",
            message: "Product title is required"
        });
    }

    if (!productDescription) {
        return res.status(400).json({
            status: "error",
            message: "Product description is required"
        });
    }

    if (unitsLeft < 0) {
        return res.status(400).json({
            status: "error",
            message: "Sold out! No more Units left "
        });
    }

    if (!pricePerUnit) {
        return res.status(400).json({
            status: "error",
            message: "Adjust Price "
        });
    }

    next();
}
