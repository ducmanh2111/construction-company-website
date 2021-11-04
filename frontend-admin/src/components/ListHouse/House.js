import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Button } from 'react-bootstrap';
import houseApi from '../../services/houseApi';

export default function House(props) {
  const { house, reload } = props;

  const deleteHouse = (id) => {
    houseApi.delete(id).then(data => {
      reload(true);
    })
  }

  return (<>
    <tr>
      <td>{house.id}</td>
      <td>{house.name}</td>
      <td>{house.house_category_name}</td>
      <td>{house.address}</td>
      <td>{house.status ? 'Done' : 'Inprogress'}</td>
      <td>{house.image_url.map((url, index) => {
        return (<Image src={`${process.env.REACT_APP_API_HOST}${url}`} thumbnail key={index} width="50" height="50"/>);
      })}</td>
      <td>
        <Link to={`/houses/${house.id}/edit`}>
          <Button variant="outline-primary">Show</Button>{' '}
        </Link>
      </td>
      <td>
        <Button variant="outline-danger" onClick={() => deleteHouse(house.id)}>Delete</Button>{' '}
      </td>
    </tr>
  </>);
}
