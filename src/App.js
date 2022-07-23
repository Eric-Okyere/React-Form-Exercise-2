import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import User from './component/User.jsx';
import './App.css';
import Userform from "./component/UsersForm.jsx";


function App() {
	const [customers, setCustomers] = useState([
		
	]);

const IncludeUser=(customer)=>{
      setCustomers([...customers, {name: customer.name, email: customer.email, gen: customer.gen}])
}

	return (
		<div className="main">
			<Container>
				<Row>
					

					<Col className="col1" md={2}>
				<Userform newcustomers={IncludeUser}/>
					</Col>
          <Col className="col2" md={10}>
          <User mycustomers={customers}/>
					</Col>
          
				</Row>
			</Container>
		</div>
	);
}

export default App;