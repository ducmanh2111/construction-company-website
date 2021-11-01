import React, {useEffect, useState} from 'react';
import RoomCategory from './RoomCategory';
import { Container, Table } from 'react-bootstrap';
import roomCategoryApi from '../../services/roomCategoryApi';

export default function ListRoomCategory() {

  const [roomCategories, setRoomCategories] = useState([]);

  useEffect(() => {
    roomCategoryApi.list().then(data => {
      setRoomCategories(data.room_categories);
    })
  }, []);

  return (<>
    <Container className="mt-5">
      <h1>List Room Category</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody className="text-center">
          { roomCategories.map((roomCategory, index) =>
            <RoomCategory roomCategory={ roomCategory } key={ index }/>
          )}
        </tbody>
      </Table>
    </Container>
  </>);
}
