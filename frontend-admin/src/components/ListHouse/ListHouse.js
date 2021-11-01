import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import House from './House';
import NewHouse from './NewHouse';
import houseApi from '../../services/houseApi';

export default function ListHouse() {
  const [houses, setHouses] = useState([]);
  const [showNewHouseForm, setShowNewHouseForm] = useState(false);
  const [showHouseTable, setShowHouseTable] = useState(true);

  useEffect(() => {
    houseApi.list().then(data => {
      setHouses(data);
    })
  },[]);

  const renderNewHouseForm = function() {
    setShowNewHouseForm(true);
    setShowHouseTable(false);
  }

  return (<div>
    <Container className="mt-5">
      { showNewHouseForm &&
        <>
          <h1>New House</h1>
          <NewHouse />
        </>
      }
      { showHouseTable &&
        <>
          <h1>List House in this page</h1>
          <Button className= "mb-2" variant="secondary" onClick={renderNewHouseForm}>Create</Button>{' '}
          <Table striped bordered hover size="sm">
            <thead>
              <tr className="text-center">
                <th>ID</th>
                <th>House Name</th>
                <th>House Address</th>
                <th>Status</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody className="text-center">
              { houses.map((house, index) =>
                <House house={ house } key={ index }/>
              )}
            </tbody>
          </Table>
        </>
      }
    </Container>
  </div>);
}
