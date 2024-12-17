import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";

const Assign = () => {
  const [input, setInput] = useState({});
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
    console.log(input);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let api = "http://localhost:8000/transactions/studentsave";
    axios.post(api, input).then((res) => {
        alert("data save!!!");
        console.log(res);
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };

  return (
    <>
      <h1> Insert Employee Record</h1>
      <Form className="formSize">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter task:</Form.Label>
          <Form.Control type="text" name="task" value={input.task} onChange={handleInput}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter description:</Form.Label>
          <Form.Control
            type="text"
            name="des"
            value={input.des}
            onChange={handleInput}
          />
        
       
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </>
  );
};
export default Assign;
