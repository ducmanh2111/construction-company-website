import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import { Form, Col, Row, Button, Container, Image } from 'react-bootstrap';
import { forEach } from 'lodash';
import houseApi from '../../services/houseApi';

import houseCategoryApi from '../../services/houseCategoryApi';

export default function EditHouse() {
  const history = useHistory();

  const { id } = useParams();

  const [houseCategories, setHouseCategories] = useState([]);
  const [houseCategoryId, setHouseCategoryId] = useState(1);
  const [houseCategoryName, setHouseCategoryName] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [status, setStatus] = useState(1);
  const [year, setYear] = useState('');
  const [floor, setFloor] = useState('');
  const [area, setArea] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);

  useEffect(() => {
    houseApi.get(id).then(data => {
      setHouseCategoryId(data.house_category_id);
      setHouseCategoryName(data.house_category_name);
      setName(data.name);
      setArea(data.area);
      setAddress(data.address);
      setFloor(data.floors);
      setYear(data.year);
      setCountry(data.country);
      setStatus(data.status);
      setDescription(data.description);
      setImageUrl(data.image_url);
    })

    houseCategoryApi.list().then(data => {
      setHouseCategories(data.house_categories);
    })
  }, [id]);

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

    houseApi.patch(id, formData).then(res => {
      history.push('/houses');
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
      <Form onSubmit={submitForm}>
        <Form.Group as={Col} controlId="formGridHouseType">
          <Form.Label>House Type</Form.Label>
          <Form.Select value={houseCategoryId} onChange={(e) => setHouseCategoryId(e.target.value)}>
            {houseCategories.map(house_category => {
              return (<option value={house_category.id} key={house_category.id}> {house_category.name} </option>);
            })}
          </Form.Select>
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="House Name" value={name} onChange={(e) => setName(e.target.value)}/>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1st Dai Co Viet" value={address} onChange={(e) => setAddress(e.target.value)}/>
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCountry">
            <Form.Label>Country</Form.Label>
            <Form.Control  placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)}/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridStatus">
            <Form.Label>Status</Form.Label>
            <Form.Select value={status ? "1" : "0"} onChange={(e) => setStatus(() => {return (e.target.value === "1") ? true : false})}>
              <option value="1">Done</option>
              <option value="0">Inprogress</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridYear">
            <Form.Label>Year</Form.Label>
            <Form.Control placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)}/>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFloor">
            <Form.Label>Floor</Form.Label>
            <Form.Control placeholder="Floor" value={floor} onChange={(e) => setFloor(e.target.value)}/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridArea">
            <Form.Label>Area</Form.Label>
            <Form.Control placeholder="Area" value={area} onChange={(e) => setArea(e.target.value)}/>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>House Image</Form.Label>
            <Form.Control type="file" multiple onChange={(e) => handleFile(e)}/>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <div className="block_image">
            {imageUrl.map((url, index) => {
              return (
                <Image src={`${process.env.REACT_APP_API_HOST}${url}`} thumbnail width="100" key={index}/>
              );
            })}
          </div>
        </Row>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
