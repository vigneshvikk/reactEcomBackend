const db=require('./db')



//Signup

signupUser=(FullName,PhoneNumber,Email,Password,ConfirmPassword,Image)=>{
    // console.log(FullName,PhoneNumber,Email,Password,ConfirmPassword,Image);
    return db.User.findOne({PhoneNumber}).then(User=>{
         if(User){
             return{
             status:false,
             statusCode: 400,
             message:' User already present'
         }
         }else{
 newUser= new db.User({
    FullName,
    PhoneNumber,
    Email,
    Password,
    ConfirmPassword,
    Image
 })
 newUser.save()
 return{
             status:true,
             statusCode:200,
             message:'Welcome to Veagle world...Your successfully Signedup'
         }
         }
     })
 }

 loginUser=(Email,Password)=>{
  
    return db.User.findOne({Email,Password}).then(user=>{
        if(user){
  
        
          return {
            status:true,
            message:"login success",
            statusCode:200,
            id:user._id,
            FullName:user.FullName,
            Email:user.Email,
            PhoneNumber:user.PhoneNumber,
            Image:user.Image
        } 
        }else {
          return  {
            status:false,
            message:"Incurrect password or Email",
            statusCode:404
            
        } 
        }
      })
  
  
  
    }



  loginAdmin=(Email,Password)=>{
  // console.log(Email,Password);
  
      return db.Admin.findOne({Email,Password}).then(admin=>{
          if(admin){
    

          
            return {
              status:true,
              message:"Admin login success",
              statusCode:200,
            
          } 
          }else {
            return  {
              status:false,
              message:"Admin Login Failed with incorrect Password or Email",
              statusCode:404
              
          } 
          }
        })
    
    
    
      }



      addProduct=(ProductName,productCategory,imgUrl,price,discription)=>{
        // console.log(ProductName,productCategory,imgUrl,price,discription);
        return db.Product.insertMany({ProductName:ProductName,productCategory,imgUrl,price,discription}).then((product)=>{
         
          return{
            status:true,
            message:"Product successfully added",
            statusCode:200
          }
        })
    
      }


getAllProduct=()=>{
return db.Product.find({}).then(product=>{
  // console.log(product);
  return{
    status:true,
    message:product,
    statusCode:200
  }
 

})
}



addCart=(id,ProductName,ProductCategory,Price,imgUrl,Discription,userPhone)=>{
  // console.log(id,ProductName,ProductCategory,Price,imgUrl,Discription,userPhone);
  var qty=1;
  return db.Cartdata.insertMany({id,ProductName,ProductCategory,Price,imgUrl,Discription,userPhone,qty}).then((cartdata)=>{
   
    return{
      status:true,
      message:"The item move to your Cart",
      statusCode:200
    }
  })

}

getcart=(userPhone)=>{
 
return db.Cartdata.find({userPhone}).then((cartdata)=>{
 
if(cartdata)
{
  console.log(cartdata);
  return{
    status:true,
    statusCode:200,
    message:cartdata
  } 
}
else{
    return{
      status:false,
      statusCode:400
    
    }
  }
  
  
  })

}



removeCart=(_id)=>{
// console.log(_id);
return db.Cartdata.findByIdAndDelete({_id}).then(cartdata=>{
  return{
    status:true,
    statusCode:200,
    message:"item removed"
  } 
})


}



addCartQty=(_id,qty)=>{

  console.log(_id,qty);
  return db.Cartdata.findOne({_id}).then(cartdata=>{
    if(cartdata){

      cartdata.qty=qty,
      cartdata.save()



      console.log(cartdata);
      return{
        status:true,
        statusCode:200,
        message:cartdata
      }
    }
  })
  

}

 
module.exports={
    signupUser, loginUser,loginAdmin,addProduct,getAllProduct,addCart,getcart,removeCart,addCartQty
}