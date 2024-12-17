import { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import spnimage from "../images/spinner.gif";
import { useNavigate } from "react-router-dom";
const DisplayExpenses=()=>{
  const navigate=useNavigate()
    const [mydata, setMydata] =useState([]);
    const [uid, setUid]=useState();
    const [isLoading, setIsloading] = useState(true);
    useEffect(()=>{
         let usrid=window.localStorage.getItem("userid");
         setUid(usrid);
    }, []);

    useEffect(()=>{
       loadData();
    }, [uid])
    
    const loadData=()=>{
        let api="http://localhost:8000/transactions/displayearning";

        axios.post(api, {id:uid}).then((res)=>{
          setMydata(res.data);
            setTimeout(()=>{
              setIsloading(false);
            }, 400);
            
        })
    }
    const handle=()=>{
      navigate("/Assign")
    }

    let sno=0;
   
 const ans=mydata.map((key)=>{
       sno++;
       
     return(
        <>
          <tr>
             <td>{sno}</td>
             <td> {key.name} </td>
             <td> {key.email} </td>
            <td><button onClick={handle}>asign</button></td> 
             
          </tr>
        </>
     )
 })

    return(
        <>

          

          {isLoading? (
           <center>
           <img src={spnimage} style={{width:"70px", marginTop:"100px"}} />
           </center>

          ) : (
          <>
            <h1> Show Total Earnings</h1>
            <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>email</th>
            <th>
              
            </th>
            
          </tr>
          
        </thead>
        <tbody>
          {ans}
  
       
        </tbody>
        </Table>
</>
          )}
          

        </>
    )
}

export default DisplayExpenses;