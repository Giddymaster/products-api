import express from 'express'
import {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductsOnOffer
} from '../controllers/productController.js'
import { validateProduct } from '../middleware/validateProduct.js'

const router = express.Router()

router.get('/', getAllProducts)
router.get('/:productId', getProductById)
router.post('/', validateProduct, createProduct)
router.patch('/:productId', validateProduct, updateProduct)
router.delete('/:productId', deleteProduct)
router.get('/offers', getProductsOnOffer)

export default router