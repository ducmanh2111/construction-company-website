import React, { useState } from "react";
import { Container, Form, Row, FloatingLabel, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import houseCategoryApi from "../../services/houseCategoryApi";

export default function NewHouseCategory() {
  const history = useHistory();

  const [name, setName] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    let house_category = { name: name }
    houseCategoryApi.post(house_category).then(res => {
      history.push('/house_categories');
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
      <h1>New House Category</h1>
      <Form onSubmit={submitForm}>
        <Row className="mb-3">
        <FloatingLabel
          controlId="floatingInput"
          label="House Category name"
          className="mb-3"
        >
          <Form.Control placeholder="House category name" onChange={(e) => setName(e.target.value)}/>
        </FloatingLabel>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
