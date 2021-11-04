import React from 'react';
import { Button } from 'react-bootstrap';
import houseCategoryApi from '../../services/houseCategoryApi';

export default function HouseCategory(props) {
  const { houseCategory, reload, setReload } = props;

  const deleteRoom = (id) => {
    houseCategoryApi.delete(id).then(data => {
      setReload(!reload);
    })
  }

  return (<>
    <tr>
      <td>{houseCategory.id}</td>
      <td>{houseCategory.name}</td>
      <td>
        <Button variant="outline-danger" onClick={() => deleteRoom(houseCategory.id)}>Delete</Button>{' '}
      </td>
    </tr>
  </>);
}
