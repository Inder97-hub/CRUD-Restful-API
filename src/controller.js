const Student = require("./models/students");

//CREATE USER
const userCreate = async (req, res) => {
  try {
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (err) {
    res.status(400).send(err);
  }
};

//READ USER (LIST)
const userList = async (req, res) => {
  try {
    const studentsData = await Student.find();
    res.send(studentsData);
    console.log(studentsData);
  } catch (err) {
    res.send(err);
  }
};

//READ USER (VIEW)
const userRead = async (req, res) => {
  try {
    const _id = req.params.id;
    const studentData = await Student.findById({ _id: _id });
    res.send(studentData);
    console.log(studentData);
  } catch (err) {
    res.status(500).send(err);
  }
};

//UPDATE USER
const userUpdate = async (req, res) => {
  try {
    const _id = req.params.id;
    const updateStudents = await Student.findByIdAndUpdate(_id, req.body, {
      new: true, //for instantly display the updated data
    });
    res.send(updateStudents);
  } catch (err) {
    res.status(404).send(err);
  }
};


//DELETE USER
const userDelete = async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteStudent = await Student.findByIdAndDelete(_id);
    if(!_id){
        return res.status.send();
    }
    res.send(deleteStudent);

  } catch (err) {
    res.status(500).send(err);
  }
};



module.exports = { 
    userCreate, 
    userRead, 
    userList, 
    userUpdate,
    userDelete 
    };
