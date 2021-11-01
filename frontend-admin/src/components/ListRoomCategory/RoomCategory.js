import React from 'react';

export default function RoomCategory(props) {
  const { roomCategory } = props;

  return (<>
    <tr>
      <td>{roomCategory.id}</td>
      <td>{roomCategory.name}</td>
    </tr>
  </>);
}
