import React from "react";
import { Card } from "react-bootstrap";

const Card2 = (props) => {
  return (
    <Card>
      <Card.Img variant="top" src={props.source} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Card2;
