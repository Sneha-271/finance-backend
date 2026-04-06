const express=require("express")
const router=express.Router()
const Record=require("/models/Record")

router.get("/summary",async(req,res)=>{

 const income=await Record.aggregate([
 { $match:{type:"income"} },
 { $group:{_id:null,total:{$sum:"$amount"}}}
 ])

 const expense=await Record.aggregate([
 { $match:{type:"expense"} },
 { $group:{_id:null,total:{$sum:"$amount"}}}
 ])

 res.json({

 totalIncome:income[0]?.total || 0,
 totalExpense:expense[0]?.total || 0

 })

})

module.exports=router