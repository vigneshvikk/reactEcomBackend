const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/MernRestaurant',{useNewUrlParser: true})

const User=mongoose.model('User',
{
FullName:String,
PhoneNumber:Number,
Email:String,
Password:String,
ConfirmPassword:String,
Image:String
}
)



const Admin=mongoose.model('Admin',
{


Email:String,
Password:String

}
)


const Product=mongoose.model('Product',
{

ProductName:String,
productCategory:String,
imgUrl:String,
price:Number,
discription:String


}
)


const Cartdata=mongoose.model('Cartdata',{
    id:String,
    ProductName:String,
    ProductCategory:String,
    Price:Number,
    imgUrl:String,
    Discription:String,
    userPhone:Number,
    qty:Number
})

module.exports={
    User,Admin,Product,Cartdata
}