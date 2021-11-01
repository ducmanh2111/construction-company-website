import React from 'react';
import { Link } from 'react-router-dom';

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
      <td>
        <Link to={`/api/v1/user/rooms/${room.id}`}>Show</Link>
      </td>
    </tr>
  </>);
}
