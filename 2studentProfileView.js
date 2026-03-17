const express = require('express');
const app = express();

//app.use(express.static('public'));

const students=[{id:1,name:"sanvi",course:"js"},
            {id:2,name:"Tanvi",course:"js"},
            {id:3,name:"Manvi",course:"js"}
];

app.get("/students",(req,res)=>{
  res.json(students);
})

app.get("/students/:id",(req,res)=>{
  const id=Number(req.params.id);
  const findStud=students.find((student)=>{ return student.id===id})
    if(findStud){
      return res.json({"id":findStud.id,"name":findStud.name,"course":findStud.course})
    }
    else{
      return res.status(404).json({"error":"students not found"})
    }
  })

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});