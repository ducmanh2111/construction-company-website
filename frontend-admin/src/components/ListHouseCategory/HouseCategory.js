import React from 'react';

export default function HouseCategory(props) {
  const { houseCategory } = props;

  return (<>
    <tr>
      <td>{houseCategory.id}</td>
      <td>{houseCategory.name}</td>
    </tr>
  </>);
}
