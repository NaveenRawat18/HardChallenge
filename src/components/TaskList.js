import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, {useState} from 'react';

function TaskList(tasks) {
  const obj = tasks.tasks
  const tick = {
    "yes": "✓",
    "no": "X"
  }
  const color1 = obj.workouts === 'yes' ? "#145A32" : "red";
  const color2 = obj.diet === 'yes' ? "#145A32" : "red";
  const color3 = obj.Learning === 'yes' ? "#145A32" : "red";
  const color4 = obj.read === 'yes' ? "#145A32" : "red";
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={obj.image} />
      <Card.Header variant="primary">Date: {obj.date}</Card.Header>
      <Card.Body>
        <Card.Title>Today's Tasks</Card.Title>
          <Row >
            <Col>
              <p>
                Read 10 pages?
              </p>
            </Col>
            <Col>
              <p style={{color: color3, fontSize: "20px", fontWeight: "bolder"}}>
                {tick[`${obj.Learning}`]}
              </p>
            </Col>
          </Row>
          <Row >
            <Col>
              <p>
                Did 45mins 2 workouts?
              </p>
            </Col>
            <Col>
              <p style={{color: color1, fontSize: "20px", fontWeight: "bolder"}}>
                {tick[`${obj.workouts}`]}
              </p>
            </Col>
          </Row>
          <Row >
            <Col>
              <p>
              Ate Healthy?
              </p>
            </Col>
            <Col>
              <p style={{color: color2, fontSize: "20px", fontWeight: "bolder"}}>
                {tick[`${obj.diet}`]}
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Drang 4L water
              </p>
            </Col>
            <Col>
              <p style={{color: color4, fontSize: "20px", fontWeight: "bolder"}}>
                {
                  tick[`${obj.read}`]
                }
              </p>
            </Col>
          </Row>
      </Card.Body>
    </Card>
  );
}

export default TaskList;