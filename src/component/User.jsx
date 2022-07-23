import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function User(props) {
	return (
		<>
        {props.mycustomers.map((item, index) => {
            return (
               


                <Card style={{ width: "25rem" }} className="cont" key={index}>
               
                <Card.Subtitle className="mb-2  text-muted">
               <h6> Name:{item.name}</h6>
            </Card.Subtitle>
                
                    <Card.Subtitle className="mb-2  text-muted">
                        <h6>Email:{item.email}</h6>
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">
                        <h6>Gen:{item.gen}</h6>
                    </Card.Subtitle>
                    <Button className="but" variant="primary" type="submit">
                    <span>&#9999;</span>
                 </Button>
                    <Button className="but"  variant="primary" type="submit">
                  <span> &#10060;</span> 
                 </Button>
               
            </Card>
            );
          })}
		</>
	);
}

export default User;