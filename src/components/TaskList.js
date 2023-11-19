import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, {useState} from 'react';

function TaskList(tasks) {
  const obj = tasks.tasks
  const [color, setColor] = useState(true)
  const tick = {
    "yes": "✓",
    "no": "X"
  }
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
              <p style={{color: color ? "#145A32" : "red", fontSize: "20px", fontWeight: "bolder"}}>
                {tick[`${obj.workouts}`]}
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
              <p style={{color: color ? "#145A32" : "red", fontSize: "20px", fontWeight: "bolder"}}>
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
              <p style={{color: color ? "#145A32" : "red", fontSize: "20px", fontWeight: "bolder"}}>
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
              <p style={{color: color ? "#145A32" : "red", fontSize: "20px", fontWeight: "bolder"}}>
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