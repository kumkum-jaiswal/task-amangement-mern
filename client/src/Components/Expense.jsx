import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Expense=()=>{
  const [input, setInput] = useState("");
  const [uid, setUid]= useState("");
  const handleInput=(e)=>{
   let name= e.target.name;
   let value=e.target.value;
   setInput(values=>({...values, [name]:value}));
  }

  useEffect(()=>{

    let userid=window.localStorage.getItem("userid");
    setUid(userid)
  }, [])
 
  const handleSubmit=(e)=>{
    e.preventDefault();
    let api="http://localhost:8000/transactions/expensesave";
    axios.post(api, {...input, id:uid}).then((res)=>{
      console.log(res);
    })
  }


  return(
        <>
          <h1> Registration Form</h1>
          <Form style={{width:"500px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name :</Form.Label>
         <Form.Control type="text"  name="amount"  value={input.name} onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Email :</Form.Label>
         <Form.Control type="text"  name="email" value={input.email} onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Password :</Form.Label>
         <Form.Control type="text"  name="password" value={input.password} onChange={handleInput}/>
      </Form.Group>
     
      
      
    {/* <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Select Date</Form.Label>
    <Form.Control type="date"  name="date"  value={input.date} onChange={handleInput}/>
    </Form.Group> */}

      <Button variant="primary" type="submit" onClick={handleSubmit} >
       Submit
      </Button>
    </Form>


        </>
    )
}

export default Expense;