import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

export default function House(props) {
  const { house } = props;
  const API_HOST = "http://localhost:4001";

  return (<>
    <tr>
      <td>{house.id}</td>
      <td>{house.name}</td>
      <td>{house.address}</td>
      <td>{house.status ? 'Done' : 'Inprogress'}</td>
      <td>{house.image_url.map((url, index) => {
        return (<Image src={`${API_HOST}${url}`} thumbnail key={index} width="50" height="50"/>);
      })}</td>
      <td>
        <Link to={`/api/v1/user/houses/${house.id}`}>Show</Link>
      </td>
    </tr>
  </>);
}
