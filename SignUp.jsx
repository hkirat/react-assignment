import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

let users = []

export function SignUp() {
  const navigate = useNavigate();
  const [details, setDetails] = useState({email: "", password: ""})

  const submitHandler = (e) => {
	e.preventDefault()
  console.log(users);
  const user = users.find(({ email }) => email === details.email);

	if(user === undefined){
		users.push(details);
    navigate("/problems/all/");
	}
  else navigate("/");
  }

  return (
    <Form style={{width: "25%", margin: "10% 40%"}} onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
	  	<h1>SignUp</h1>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={details.email} onChange = {(e) => setDetails({...details, email: e.target.value})}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={details.password} onChange = {(e) => setDetails({...details, password: e.target.value})}/>
      </Form.Group>
      
      <Button variant="primary" type="submit" style={{padding: "7px 170px"}}>
        Submit
      </Button>
    </Form>
  )
}

export {users}