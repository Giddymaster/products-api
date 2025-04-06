import express from 'express';

const app = express();


app.get("/products", (_req, res)=>{
    res.send("Getting all products")
})

app.get("/products/:productId", (_req,res) => {
    res.send ("Getting a specific product")
})

app.post("/products", (_req, res) => {
    res.send("Creating a product")
})

app.patch("/products/:productId", (_req, res) => {
    res.send("Updating a product")
})

app.delete("/products/:productId", (_req, res) =>{
    res.send("Delete a specific product")
})
let port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log('Server running on port 3000...')
})
