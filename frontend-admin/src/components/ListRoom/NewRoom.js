import React, { useState, useEffect } from 'react';
import { Form, Col, Row, Button, FloatingLabel, Container } from 'react-bootstrap';
import { forEach } from 'lodash';
import roomApi from '../../services/roomApi';
import roomCategoryApi from '../../services/roomCategoryApi';
import houseApi from '../../services/houseApi';

export default function NewRoom() {
  const [roomCategories, setRoomCategories] = useState([]);
  const [roomCategoryId, setRoomCategoryId] = useState(1);
  const [houses, setHouses] = useState([]);
  const [houseId, setHouseId] = useState(1);
  const [area, setArea] = useState('');
  const [door, setDoor] = useState('');
  const [windows, setWindows] = useState('');
  const [doorDirection, setDoorDirection] = useState('');
  const [images, setImages] = useState([]);

  useEffect(() => {
    roomCategoryApi.list().then(data => {
      setRoomCategories(data.room_categories);
    })
    houseApi.list().then(data => {
      setHouses(data);
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
      room_category_id: roomCategoryId,
      house_id: houseId,
      area: area,
      door: door,
      window: windows,
      door_direction: doorDirection,
    }

    const formData = new FormData();
    forEach(form, function(value, key) {
      formData.append(`room[${key}]`, value);
    });
    for (let i = 0 ; i < images.length ; i++) {
      formData.append(`room[image][]`, images[i]);
    }

    roomApi.post(formData).then(res => {
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
    <Container className="mt-3">
      <Form onSubmit={submitForm}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridRoomType">
            <Form.Label>Room Type</Form.Label>
            <Form.Select defaultValue="1" onChange={(e) => setRoomCategoryId(e.target.value)}>
              {roomCategories.map(room_category => {
                return (<option value={room_category.id} key={room_category.id}> {room_category.name} </option>);
              })}
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridHouseName">
            <Form.Label>House Name</Form.Label>
            <Form.Select defaultValue="1" onChange={(e) => setHouseId(e.target.value)}>
              {houses.map(house => {
                return (<option value={house.id} key={house.id}> {house.name} </option>);
              })}
            </Form.Select>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <h3>Detail information</h3>
          <FloatingLabel
            controlId="floatingInputArea"
            label="Area"
            className="mb-3"
            as={Col}
          >
            <Form.Control placeholder="Area" onChange={(e) => setArea(e.target.value)}/>
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInputWindow"
            label="Number of Windows"
            className="mb-3"
            as={Col}
          >
            <Form.Control placeholder="Window" onChange={(e) => setWindows(e.target.value)}/>
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInputDoor"
            label="Number of Doors"
            className="mb-3"
            as={Col}
          >
            <Form.Control placeholder="Door" onChange={(e) => setDoor(e.target.value)}/>
          </FloatingLabel>


          <FloatingLabel controlId="floatingInputDoorDirection" label="Door direction" as={Col}>
            <Form.Select aria-label="Door direction" onChange={(e) => setDoorDirection(e.target.value)} className="mb-3">
              <option>Please select</option>
              <option value="East">Đông</option>
              <option value="West">Tây</option>
              <option value="South">Nam</option>
              <option value="North">Bắc</option>
            </Form.Select>
          </FloatingLabel>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formFileMultiple" className="mb-3">
            <Form.Label>House Image</Form.Label>
            <Form.Control type="file" multiple onChange={(e) => handleFile(e)}/>
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
