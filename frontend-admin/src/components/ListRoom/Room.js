import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Button } from 'react-bootstrap';
import roomApi from '../../services/roomApi';

export default function Room(props) {
  const { room } = props;

  const deleteRoom = (id) => {
    roomApi.delete(id).then(data => {
      window.location.reload();
    })
  }

  return (<>
    <tr>
      <td>{room.id}</td>
      <td>{room.room_category_name}</td>
      <td>{room.house_name}</td>
      <td>{room.area}</td>
      <td>{room.door}</td>
      <td>{room.door_direction}</td>
      <td>{room.window}</td>
      <td>{room.image_url.map((url, index) => {
        return (<Image src={`${process.env.REACT_APP_API_HOST}${url}`} thumbnail key={index} width="50" height="50"/>);
      })}</td>
      <td>
        <Link to={`/rooms/${room.id}/edit`}>
          <Button variant="outline-primary">Show</Button>{' '}
        </Link>
      </td>
      <td>
        <Button variant="outline-danger" onClick={() => deleteRoom(room.id)}>Delete</Button>{' '}
      </td>
    </tr>
  </>);
}
