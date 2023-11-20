import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.css';

function Jobs(){
    return(
        <CardGroup>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Job 1</Card.Title>
            <Card.Text>
              Job 1 Card 
              Job 1 Card
              Job 1 Card
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <Button variant="primary">Apply</Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Job 2</Card.Title>
            <Card.Text>
            Job 2 Card 
              Job 2 Card
              Job 2 Card
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <Button variant="primary">Apply</Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Job 3</Card.Title>
            <Card.Text>
            Job 3 Card 
              Job 3 Card
              Job 3 Card
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <Button variant="primary">Apply</Button>
          </Card.Footer>
        </Card>
      </CardGroup>
    )
}

export default Jobs