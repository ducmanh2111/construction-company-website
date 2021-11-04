import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Form, Row, FloatingLabel, Button } from 'react-bootstrap';
import roomCategoryApi from '../../services/roomCategoryApi';

export default function NewRoomCategory() {
  const history = useHistory();

  const [name, setName] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    let room_category = { name: name }
    roomCategoryApi.post(room_category).then(res => {
      history.push('/room_categories');
    }).catch(error => {
      const messages = error.response.data.meta.errors;
      const fullMessage = [];
      for (const attr in messages) {
        fullMessage.push(messages[attr])
      }
      alert(fullMessage.join('\n'));
    })
  }

  return (
    <Container className="mt-3">
      <h1>New Room Category</h1>
      <Form onSubmit={submitForm}>
        <Row className="mb-3">
        <FloatingLabel
          controlId="floatingInput"
          label="Room Category name"
          className="mb-3"
        >
          <Form.Control placeholder="Room category name" onChange={(e) => setName(e.target.value)}/>
        </FloatingLabel>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
