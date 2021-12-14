const express = require("express");
require("./db/conn");
// const Student = require("./models/students");
const router = require("./routes/route");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use('/students', router);







app.listen(port, () => {
  console.log(`connection is listening at Port ${port}`);
});


















































//CRUD stands for Create, Read, Update & Delete.
//Create a new student -CREATE

// app.post("/students", (req, res) => {
//   console.log(req.body);
//   const user = new Student(req.body);
//   user
//     .save()
//     .then(() => {
//       res.status(201).send(user);
//     })
//     .catch((err) => {
//       res.status(400).send(err);
//     });
// });



//create a new student using async await -CREATE

// app.post("/students", async (req, res) => {
//   try {
//     const user = new Student(req.body);
//     const createUser = await user.save();
//     res.status(201).send(createUser);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });






//Get the whole document - READ

// app.get("/students", async (req, res) => {
//   try {
//     const studentsData = await Student.find();
//     res.send(studentsData);
//     console.log(studentsData);
//   } catch (err) {
//     res.send(err);
//   }
// });


// app.post("/students/:id", async (req,res)=>{
//     try{
//         const _id = req.params.id;
//         const studentData = await Student.findById({_id:_id});
//         res.send(studentData);
//         console.log(studentData);

//     }catch(err){
//         res.status(500).send(err);
//     }

// })

//update the document by its id! -UPDATE

// app.patch("/students/:id", async (req, res) => {
//   try{
// const _id = req.params.id;
// const updateStudents = await Student.findByIdAndUpdate(_id, req.body,{
//   new:true //for instantly display the updated data
// } );
// res.send(updateStudents);
//   }catch(err){
//     res.status(404).send(err);

//   }
// })

//Delete the document -DELETE


