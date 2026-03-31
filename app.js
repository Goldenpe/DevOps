const express=require("express")
const app=express();
const env=require("dotenv").config();
const PORT=process.env.PORT || 8080;
// this is from me add this first
app.use(("/"),(req,res)=>{
res.json({message:"hello world"})
})

app.use(("/test",(req,res)=>{
res.json({message:"This is a test"})

}))
//this is from dev branch
app.use(("/abc",(req,res)=>{
res.json({message:"This is a abc"})

}))


app.use(("/test123",(req,res)=>{
res.json({message:"This is a test123"})
}))

app.listen(PORT,()=>{
console.log(`Server is running on PORT ${PORT}`)
})
