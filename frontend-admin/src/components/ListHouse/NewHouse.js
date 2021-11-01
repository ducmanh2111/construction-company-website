import React, { useState, useEffect } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import { forEach } from 'lodash';
import houseApi from '../../services/houseApi';

import houseCategoryApi from '../../services/houseCategoryApi';

export default function NewHouse() {

  const [houseCategories, setHouseCategories] = useState([]);
  const [houseCategoryId, setHouseCategoryId] = useState(1);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [status, setStatus] = useState('');
  const [year, setYear] = useState('');
  const [floor, setFloor] = useState('');
  const [area, setArea] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);

  useEffect(() => {
    houseCategoryApi.list().then(data => {
      setHouseCategories(data.house_categories);
    })
  }, []);

  const handleFile = function(e) {
    const files = e.target.files || e.dataTransfer.files;
    if (!files.length) return;
    setImages(files);
  }

  const submitForm = function(e) {
    e.preventDefault();
    let form = {
      house_category_id: houseCategoryId,
      name: name,
      address: address,
      floors: floor,
      year: year,
      country: country,
      status: status,
      description: description,
      area: area,
    }

    const formData = new FormData();
    forEach(form, function(value, key) {
      formData.append(`house[${key}]`, value);
    });

    for (let i = 0 ; i < images.length ; i++) {
      formData.append(`house[image][]`, images[i]);
    }

    houseApi.post(formData).then(res => {
      window.location.reload();
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
    <Form onSubmit={submitForm}>
      <Form.Group as={Col} controlId="formGridHouseType">
        <Form.Label>House Type</Form.Label>
        <Form.Select defaultValue="1" onChange={(e) => setHouseCategoryId(e.target.value)}>
          {houseCategories.map(house_category => {
            return (<option value={house_category.id} key={house_category.id}> {house_category.name} </option>);
          })}
        </Form.Select>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="House Name" onChange={(e) => setName(e.target.value)}/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1st Dai Co Viet" onChange={(e) => setAddress(e.target.value)}/>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCountry" onChange={(e) => setCountry(e.target.value)}>
          <Form.Label>Country</Form.Label>
          <Form.Control  placeholder="Country" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridStatus" onChange={(e) => setStatus(e.target.value)}>
          <Form.Label>Status</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option value={1}>Done</option>
            <option value={0}>Inprogress</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridYear" onChange={(e) => setYear(e.target.value)}>
          <Form.Label>Year</Form.Label>
          <Form.Control placeholder="Year"/>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFloor" onChange={(e) => setFloor(e.target.value)}>
          <Form.Label>Floor</Form.Label>
          <Form.Control placeholder="Floor"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridArea" onChange={(e) => setArea(e.target.value)}>
          <Form.Label>Area</Form.Label>
          <Form.Control placeholder="Area"/>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>House Image</Form.Label>
          <Form.Control type="file" multiple onChange={(e) => handleFile(e)}/>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" placeholder="Description" onChange={(e) => setDescription(e.target.value)}/>
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
