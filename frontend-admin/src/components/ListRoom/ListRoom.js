import React, { useState, useEffect } from 'react';
import { Container, Button, Table } from 'react-bootstrap';
import Room from './Room';
import roomApi from '../../services/roomApi';
import { Link } from 'react-router-dom';

export default function ListRoom() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    roomApi.list().then(data => {
      setRooms(data);
    })
  },[]);


  return (<div>
    <Container className="mt-5">
      <h1>List Room in this page</h1>
      <Link to="/rooms/new" className="text-white text-decoration-none">
        <Button className= "mb-2" variant="secondary">
            New Room
        </Button>{' '}
      </Link>
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
            <th>Images</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody className="text-center">
          { rooms.map((room, index) =>
            <Room room={ room } key={ index }/>
          )}
        </tbody>
      </Table>
    </Container>
  </div>);
}
