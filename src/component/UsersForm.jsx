import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Userform(props) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [gen, setGen] = useState("");
    const Mycustomers =(e)=>{
            e.preventDefault();
           props.newcustomers({name,email,gen})
		setEmail('');
		setName('');
		setGen('')
		}
	return (
		<Form>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Name</Form.Label>
				<Form.Control
					type="Name"
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
				/>
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Email address</Form.Label>
				<Form.Control
					type="email"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Gen</Form.Label>
				<Form.Control
					type="gen"
					value={gen}
					onChange={(e) => {
						setGen(e.target.value);
					}}
				/>
			</Form.Group>

			<Button onClick={Mycustomers} variant="primary" type="submit">
				 &#10004;
			</Button>
		</Form>
	);
}

export default Userform;