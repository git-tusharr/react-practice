import axios from "axios";
import { useEffect,useState } from "react";
import { useActionData } from "react-router-dom";





const Display=()=>{
  const[students,setStudents]=useState([]);

  const loadData=async()=>{
    let api ="http://localhost:3000/students";
    const response =await axios.get(api);
    console.log(response.data);
    setStudents(response.data);

  }


  useEffect(()=>{
  loadData();

},[])



const studentInfo=students.map((student)=>{
  return(
    <>
    <tr>
      <td>{student.rollno}</td>
      <td>{student.name}</td>
      <td>{student.city}</td>
      <td>{student.fees}</td>
    </tr>
    </>
  )
})




  return(
    <>
    <h1>Weclome to my display</h1>


    <table border={1}>
      <tr>
        <th>Rollno</th>
        <th>Name</th>
        <th>City</th>
        <th>Fees</th>
      </tr>
      {studentInfo}

      

    </table>



   
    </>
  )
}
export default Display;