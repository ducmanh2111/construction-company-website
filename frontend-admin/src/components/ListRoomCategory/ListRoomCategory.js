import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Container, Table, Button } from 'react-bootstrap';
import RoomCategory from './RoomCategory';
import roomCategoryApi from '../../services/roomCategoryApi';

export default function ListRoomCategory() {

  const [roomCategories, setRoomCategories] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    roomCategoryApi.list().then(data => {
      setRoomCategories(data.room_categories);
    })
  }, [reload]);

  return (<>
    <Container className="mt-5">
      <h1>List Room Category</h1>
      <Link to="/room_categories/new" className="text-white text-decoration-none">
        <Button className= "mb-2" variant="secondary">
            New Room Category
        </Button>{' '}
      </Link>
      <Table striped bordered hover size="sm">
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>Name</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="text-center">
          { roomCategories.map((roomCategory, index) =>
            <RoomCategory roomCategory={roomCategory} key={index} reload={reload} setReload={setReload}/>
          )}
        </tbody>
      </Table>
    </Container>
  </>);
}
