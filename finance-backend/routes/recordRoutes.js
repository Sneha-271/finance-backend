const express=require("express")
const router=express.Router()
const Record=require("../models/Record")

router.post("/create",async(req,res)=>{

 const record=new Record(req.body)
 await record.save()

 res.json(record)

})

router.get("/",async(req,res)=>{

 const records=await Record.find()

 res.json(records)

})

router.delete("/:id",async(req,res)=>{

 await Record.findByIdAndDelete(req.params.id)

 res.json({message:"Deleted"})

})

module.exports=router