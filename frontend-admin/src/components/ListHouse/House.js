import React from 'react';
import { Link } from 'react-router-dom'

export default function House(props) {
  const { house } = props;
  return (<>
    <tr>
      <td>{house.id}</td>
      <td>{house.name}</td>
      <td>{house.address}</td>
      <td>{house.status ? 'Done' : 'Inprogress'}</td>
      <td>
        <Link to={`/api/v1/user/houses/${house.id}`}>Show</Link>
      </td>
    </tr>
  </>);
}
