import axios from "axios";
import { useEffect,useState } from "react";

const Display=()=>{

    const[myData,setMydata]=useState([]);

    const loadData=async()=>{

    let api ="http://localhost:3000/students";
    const response=await axios.get(api);
    console.log(response);
    setMydata(response.data);

    }

    useEffect(()=>{
        loadData();
    },[])

    const ans=myData.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
            </tr>
            </>
        )
    })

    
    return(
        <>
        <h1>This is my display page</h1>

        <table border="1" cellPadding={10} align="center">
            <tr>
                <th>Rollno</th>
                <th>Name</th>
                <th>City</th>
                <th>Fees</th>
            </tr>
            {ans}
        </table>
         
        </>
    )
}
export default Display;