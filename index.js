import express from 'express'
import productRoutes from './routes/productRoutes.js'

const app = express()
app.use(express.json())
app.use('/products', productRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})