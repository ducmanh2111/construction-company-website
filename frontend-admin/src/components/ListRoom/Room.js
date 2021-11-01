import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

export default function Room(props) {
  const { room } = props;

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
        <Link to={`/rooms/${room.id}/edit`}>Show</Link>
      </td>
    </tr>
  </>);
}
