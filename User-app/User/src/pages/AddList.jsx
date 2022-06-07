import React from 'react';
import {Form,Row,Col} from 'react-bootstrap'
const AddList = () => {

    const handleSubmit = (e) => {// console.log(e)};

    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Col sm="10">
            <Form.Control type="text" placeholder="Title" name="title" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Col sm="10">
            <Form.Control type="text" name="type" placeholder="Type" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Col sm="10">
            <Form.Control type="text" name="genre" placeholder="Title" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Col sm="10">
            <Form.Control type="text" name="genre" placeholder="Title" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Col sm="10">
            <Form.Control type="text" name="content" placeholder="Movies" />
          </Col>
        </Form.Group>
      </Form>
    );
};

export default AddList;