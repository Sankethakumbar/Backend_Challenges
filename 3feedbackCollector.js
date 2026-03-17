const express = require('express');
const app = express();

app.use(express.static('public'));

const feedback=[];

app.use(express.json());
app.post("/feedback",(req,res)=>{
  const text=req.body.text;
  feedback.push(text);
  res.json({
    "message": "Feedback received"
  })
})
app.get("/feedback",(req,res)=>{
  res.send(feedback);
})
app.get("/feedback/:id",(req,res)=>{
  const id=Number(req.params.id);
if (!Number.isInteger(id) || id < 0 || id >= feedback.length) { 
    return res.json({"error": "Feedback not found"}); 
} 
else { 
    res.send(feedback[id]); 
} 
})

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});