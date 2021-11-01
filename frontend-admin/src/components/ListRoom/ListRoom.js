import React, { useState, useEffect } from 'react';
import { Container, Button, Table } from 'react-bootstrap';
import Room from './Room';
import NewRoom from './newRoom';
import roomApi from '../../services/roomApi';

export default function ListRoom() {
  const [rooms, setRooms] = useState([]);
  const [showNewRoomForm, setShowNewRoomForm] = useState(false);
  const [showRoomTable, setShowRoomTable] = useState(true);

  useEffect(() => {
    roomApi.list().then(data => {
      setRooms(data);
    })
  },[]);

  const renderNewRoomForm = function() {
    setShowNewRoomForm(true);
    setShowRoomTable(false);
  }

  return (<div>
    <Container className="mt-5">
      { showNewRoomForm &&
        <>
          <h1>New Room</h1>
          <NewRoom />
        </>
      }
      { showRoomTable &&
        <>
          <h1>List Room in this page</h1>
          <Button className= "mb-2" variant="secondary" onClick={renderNewRoomForm}>Create</Button>{' '}
          <Table striped bordered hover size="sm">
            <thead>
              <tr className="text-center">
                <th>ID</th>
                <th>Room Name</th>
                <th>House Name</th>
                <th>Area</th>
                <th>Number of Doors</th>
                <th>Door direction</th>
                <th>Number of Windows</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody className="text-center">
              { rooms.map((room, index) =>
                <Room room={ room } key={ index }/>
              )}
            </tbody>
          </Table>
        </>
      }
    </Container>
  </div>);
}
