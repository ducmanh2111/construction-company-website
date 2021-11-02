import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import House from './House';
import houseApi from '../../services/houseApi';

export default function ListHouse() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    houseApi.list().then(data => {
      setHouses(data);
    })
  },[]);

  return (<div>
    <Container className="mt-5">
      <h1>List House in this page</h1>
        <Link to="/houses/new" className="text-white text-decoration-none">
          <Button className= "mb-2" variant="secondary">
              New House
          </Button>{' '}
        </Link>
      <Table striped bordered hover size="sm">
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>House Name</th>
            <th>House Type</th>
            <th>House Address</th>
            <th>Status</th>
            <th>Images</th>
            <th>Details</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="text-center">
          { houses.map((house, index) =>
            <House house={ house } key={ index }/>
          )}
        </tbody>
      </Table>
    </Container>
  </div>);
}
