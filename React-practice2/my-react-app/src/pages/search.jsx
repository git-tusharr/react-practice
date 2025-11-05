import axios from "axios";
import { useEffect, useState } from "react";

const Search = () => {

  const [rno, setRno] = useState([]);
  const [students,setStudents]=useState([]);
  console.log(rno);




  const handleSubmit=async()=>{
    let api=`http://localhost:3000/students/?rollno=${rno}`
    const result= await axios(api);
    console.log(result);
    setStudents(result.data);
  }

  const searchResult=students.map((student)=>{

    return(<>
    <tr>
    <td>{student.rollno}</td>
  <td>{student.name}</td>
  <td>{student.city}</td>
  <td>{student.fees}</td>
  </tr>
    </>)
    
  })




  return (
    <>
      <h1>Weclome to my search</h1>

      Enter roll no : <input type="text" value={rno} onChange={(e) => { setRno(e.target.value) }} />

      <button onClick={handleSubmit}>Search</button>


      <table border="1" cellPadding={10} align="center">
        <tr>
          <th>Rollno</th>
          <th>Name</th>
          <th>City</th>
          <th>Fees</th>
        </tr>
{searchResult}
      </table>


    </>
  )
}
export default Search;