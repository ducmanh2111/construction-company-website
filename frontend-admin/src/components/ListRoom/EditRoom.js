import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import { Button, Form, Row, Col, FloatingLabel, Image, Container } from 'react-bootstrap';
import { forEach } from 'lodash';
import roomApi from '../../services/roomApi';
import roomCategoryApi from '../../services/roomCategoryApi';
import houseApi from '../../services/houseApi';

export default function EditRoom() {
  const history = useHistory();

  const { id } = useParams();

  const [door, setDoor] = useState(0);
  const [doorDirection, setDoorDirection] = useState('');
  const [imageUrl, setImageUrl] = useState([]);
  const [roomCategoryId, setRoomCategoryId] = useState(1);
  const [houseId, setHouseId] = useState(1);
  const [houses, setHouses] = useState([]);
  const [roomCategories, setRoomCategories] = useState([]);
  const [area, setArea] = useState(0);
  const [windows, setWindows] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    roomApi.get(id).then(data => {
      setDoor(data.door);
      setDoorDirection(data.door_direction);
      setImageUrl(data.image_url);
      setRoomCategoryId(data.room_category_id);
      setHouseId(data.house_id);
      setWindows(data.window);
      setArea(data.area);
      setImageUrl(data.image_url);

    });
    roomCategoryApi.list().then(data => {
      setRoomCategories(data.room_categories);
    });
    houseApi.list().then(data => {
      setHouses(data);
    });
  }, [id]);

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

    roomApi.patch(id, formData).then(res => {
      history.push(`/rooms`);
    }).catch(error => {
      const messages = error.response.data.meta.errors;
      const fullMessage = [];
      for (const attr in messages) {
        fullMessage.push(messages[attr])
      }
      alert(fullMessage.join('\n'));
    })
  }

  const handleFile = (e) => {
    const files = e.target.files || e.dataTransfer.files;
    if (!files.length) return;
    setImages(files);
  }

  return (
    <Container className="mt-3">
      <Form onSubmit={submitForm}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridRoomType">
            <Form.Label>Room Type</Form.Label>
            <Form.Select value={roomCategoryId} onChange={(e) => setRoomCategoryId(e.target.value)}>
              {roomCategories.map(room_category => {
                return (<option value={room_category.id} key={room_category.id}> {room_category.name} </option>);
              })}
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridHouseName">
            <Form.Label>House Name</Form.Label>
            <Form.Select value={houseId} onChange={(e) => setHouseId(e.target.value)}>
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
            <Form.Control placeholder="Area" value={area} onChange={(e) => setArea(e.target.value)}/>
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInputWindow"
            label="Number of Windows"
            className="mb-3"
            as={Col}
          >
            <Form.Control placeholder="Window" value={windows} onChange={(e) => setWindows(e.target.value)}/>
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInputDoor"
            label="Number of Doors"
            className="mb-3"
            as={Col}
          >
            <Form.Control placeholder="Door" value={door} onChange={(e) => setDoor(e.target.value)}/>
          </FloatingLabel>


          <FloatingLabel controlId="floatingInputDoorDirection" label="Door direction" as={Col}>
            <Form.Select aria-label="Door direction" value={doorDirection} onChange={(e) => setDoorDirection(e.target.value)} className="mb-3">
              <option>Please select</option>
              <option value="Đông">Đông</option>
              <option value="Tây">Tây</option>
              <option value="Nam">Nam</option>
              <option value="Bắc">Bắc</option>
            </Form.Select>
          </FloatingLabel>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formFileMultiple" className="mb-3">
            <Form.Label>Room Image</Form.Label>
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
