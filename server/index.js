import express from 'express';
import cors from 'cors';
import mongoose,{model,Schema} from 'mongoose';
import dotenv from "dotenv";

dotenv.config();

 const app=express();
 app.use(express.json());
 app.use(cors());

 const ConnectDB = async()=>{
    await mongoose.connect(process.env.MongoDB_url);
    console.log("Connected to database");

 }
 ConnectDB();
 

 const notesSchema= new Schema({
    title: String,
    content: String,
    category: String
 })

 const Note = model("Note",notesSchema);
 

 app.post("/Notes", async(req,res)=>{
    const{title,content,category}=req.body;

    if (!title){
      return res.json({
         success:"false",
         message:"Title is required",
         data:null
      })
    }
    if (!content){
      return res.json({
         success:"false",
         message:"content is required",
         data:null
      })
    }
    if (!category){
      return res.json({
         success:"false",
         message:"category is required",
         data:null
      })
    }

    

    const newNote = await Note.create({
        "title":title,
        "content":content,
        "category":category
    })
    

    res.json({
        "success":true,
        "message":"Notes added successfully",
        "data": newNote
    })


 })
 app.get("/Notes", async(req,res)=>{
   const notes = await Note.find()
    res.json({
       "success":true,
       "message":"All notes uploaded successfully",
       "data":notes
    })
 })

 app.get("/Notes/:id", async(req,res)=>{
   const {id }=req.params;
   const note = await Note.findOne({_id:id})

   res.json({
      success:true,
      message:"Notes fetched successfully",
      data:note
   })

 }
)

app.put("/Notes/:id", async(req,res)=>{
   const {id}= req.params;
    const{title,content,category}=req.body;
    await Note.updateOne({_id:id},{$set:{
      title:title,
      content:content,
      category:category
    }})

    res.json({
      success:true,
      message:"Notes update successfully",
      data:null
    })
})

app.delete("/Notes/:id", async(req,res)=>{
   const {id}=req.params;
   await Note.deleteOne({_id:id})

   res.json({
      success:"true",
      message:"Note deleted successfully",
      data:null
   })

})


app.get('/health',(req,res)=>{
    res.json({
        success: true,
        message:"Server is healthy"

    })
});

const port = process.env.PORT || 5000;

 app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
 });