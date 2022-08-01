import Button from "react-bootstrap/Button";
import { Container, Row } from "react-bootstrap";
import UserCard from "./UserCard";

function User(props) {



	return (
		<>
        <Container>
        <Row>
        {props.userData.map((item, index) => {
            return (
               <UserCard
               key={index}
               userInfo={item}
               deleteUser={props.deleteUser}
               userEdit={props.handleEdit}
               />
            );
          })}
          </Row>
          </Container>
		</>
	);
}

export default User;