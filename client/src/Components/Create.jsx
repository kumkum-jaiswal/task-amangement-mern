import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import axios from 'axios';
const Create=()=>{
  const [uid, setUid]= useState();
  const [input, setInput]=useState({});

  
  useEffect(()=>{
    let usrid= window.localStorage.getItem("userid");
    setUid(usrid);
  }, []);

  const handleInput=(e)=>{
    let name=e.target.name;
    let value= e.target.value;

    setInput(values=>({...values, [name]:value}));
    console.log(input);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();

    let api="http://localhost:8000/transactions/amountsave";
    axios.post(api, {...input, id:uid}).then((res)=>{
      console.log(res);
    })
  }


    return(
        <>
          <h1> Enter your Earning</h1>

          <Form style={{width:"500px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Email</Form.Label>
         <Form.Control type="text"  name="email" value={input.email} onChange={handleInput} />
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Enter Password</Form.Label>
      <Form.Control type="text"  name="pass" value={input.pass} onChange={handleInput} />
      
    </Form.Group>
      
    

      <Button variant="primary" type="submit" onClick={handleSubmit}>
       Submit
      </Button>
    </Form>

        </>
    )
}

export default Create;