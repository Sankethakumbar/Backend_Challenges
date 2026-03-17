const express = require('express');
const app = express();


app.get("/event/:eventname",(req,res)=>{
  console.log(req.params.eventname);
  res.json({"event":req.params.event,
          "message":req.params.eventname
  })
})

app.get("/search",(req,res)=>{
  console.log(req.query.type, req.query.keyword);
  if(!req.query.keyword){
    res.status(404).json({"error":"keyword is required"})
  }
  else{
    res.json({"type":req.query.type,"keyword":req.query.keyword,"message":`${req.query.type} and ${req.query.keyword}`})
  }
})

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});