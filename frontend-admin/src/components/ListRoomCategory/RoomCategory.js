import React from 'react';
import { Button } from 'react-bootstrap';
import roomCategoryApi from '../../services/roomCategoryApi';

export default function RoomCategory(props) {
  const { roomCategory, reload, setReload } = props;

  const deleteRoom = (id) => {
    roomCategoryApi.delete(id).then(data => {
      setReload(!reload);
    })
  }

  return (<>
    <tr>
      <td>{roomCategory.id}</td>
      <td>{roomCategory.name}</td>
      <td>
        <Button variant="outline-danger" onClick={() => deleteRoom(roomCategory.id)}>Delete</Button>{' '}
      </td>
    </tr>
  </>);
}
