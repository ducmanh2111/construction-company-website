import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

export default function Room(props) {
  const { room } = props;
  const API_HOST = "http://localhost:4001";

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
        return (<Image src={`${API_HOST}${url}`} thumbnail key={index} width="50" height="50"/>);
      })}</td>
      <td>
        <Link to={`/api/v1/user/rooms/${room.id}`}>Show</Link>
      </td>
    </tr>
  </>);
}
