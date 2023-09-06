const express=require('express')
const server=express()
const cors=require('cors')
server.use(cors({origin:'http://localhost:3000'}))
server.use(express.json({limit:"10mb"}))
const logic=require('./services/logic')

server.listen(8081,()=>{
    console.log('-------------------server start at 8081---------------------');
})



//Signup
server.post('/signup',(req,res)=>{
    logic.signupUser(req.body.FullName,req.body.PhoneNumber,req.body.Email,req.body.Password,req.body.ConfirmPassword,req.body.Image).then(result=>{
    res.status(result.statusCode).json(result)
    })
    }) 
// server.post("/signup",(req,res)=>{
// console.log(req.body);
// })

//login
server.post("/loginUser",(req,res)=>{
    logic.loginUser(req.body.Email,req.body.Password).then(result=>{
   res.status(result.statusCode).json(result)

    }) 
})


// admin login
server.post("/loginAdmin",(req,res)=>{
    logic.loginAdmin(req.body.Email,req.body.Password).then(result=>{
   res.status(result.statusCode).json(result)

    }) 
})

//add products
server.post("/addProduct",(req,res)=>{
    logic.addProduct(req.body.ProductName,req.body.productCategory,req.body.imgUrl,req.body.price,req.body.discription).then(result=>{
   res.status(result.statusCode).json(result)

    }) 
})


//get all product
server.get("/getAllProduct",(req,res)=>{
    logic.getAllProduct().then(result=>{
   res.status(result.statusCode).json(result)

    }) 
})

//add cart
server.post("/addCart",(req,res)=>{
    logic.addCart(req.body.id,req.body.ProductName,req.body.ProductCategory,req.body.Price,req.body.imgUrl,req.body.Discription,req.body.userPhone).then(result=>{
   res.status(result.statusCode).json(result)

    }) 
})

//get cart
server.post("/getCart",(req,res)=>{
    logic.getcart(req.body.userPhone).then(result=>{
   res.status(result.statusCode).json(result)

    }) 
})


//delete cart
server.post("/RemoveCartItem",(req,res)=>{
    logic.removeCart(req.body._id).then(result=>{
   res.status(result.statusCode).json(result)

    }) 
})

//add qty
server.post("/addCartQty",(req,res)=>{
    logic.addCartQty(req.body._id,req.body.qty).then(result=>{
   res.status(result.statusCode).json(result)

    }) 
})