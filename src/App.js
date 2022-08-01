import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import User from './component/User.jsx';
import './App.css';
import Userform from "./component/UsersForm.jsx";


function App() {
	const [users, setUsers] = useState([
		{ name: "John", email: "jon@gmail.com", gen: "4", id: "edjjdjdjdjdkskw" },
		{ name: "Ama", email: "ama@gmail.com", gen: "48", id: "udiue9893e03-kked" },
		{ name: "tony", email: "gmail.com", gen: "40", id: "uuueiriedm003wwsw" },
		{
			name: "kachi ",
			email: "kachigmail.com",
			gen: "90",
			id: "090390kiocjifiorhi4",
		},
	]);

	const AddNewUser = (user) => {
		user.id = Math.random().toString(36);
		setUsers([
			...users,
			{ id: user.id, name: user.name, email: user.email, gen: user.gen },
		]);
		console.log(user);
	};
	
	const deleteUser = (id) => {

		setUsers(users.filter((user) => user.id !== id));

		//normal if else statement to delete user from users array
		// setUsers(
		// 	users.filter((user) => {
		// 		if (user.id !== id) {
		// 			return user;
		// 		}
		// 	})
		// );
	};


	
	const handleEdit = (id, newInfo) => {
		setUsers(users.map((user) => (user.id === id ? newInfo : user)));
	};
	return (
		<div >
			<Container>
				<Row>
					

					<Col md={2}>
				<Userform newUser={AddNewUser}/>
					</Col>
          <Col>
          <User 
		  userData={users}
		  deleteUser={deleteUser}
		  userEdit={handleEdit}
		  />
					</Col>
          
				</Row>
			</Container>
		</div>
	);
}

export default App;