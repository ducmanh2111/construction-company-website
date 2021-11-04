import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Container, Table, Button } from 'react-bootstrap';
import HouseCategory from './HouseCategory';
import houseCategoryApi from '../../services/houseCategoryApi';

export default function ListHouseCategory() {

  const [houseCategories, setHouseCategories] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    houseCategoryApi.list().then(data => {
      setHouseCategories(data.house_categories);
    })
  }, [reload]);

  return (<>
    <Container className="mt-5">
      <h1>List House Category</h1>
      <Link to="/house_categories/new" className="text-white text-decoration-none">
        <Button className= "mb-2" variant="secondary">
            New House Category
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
          {houseCategories.map((houseCategory, index) =>
            <HouseCategory houseCategory={houseCategory} key={index} reload={reload} setReload={setReload}/>
          )}
        </tbody>
      </Table>
    </Container>
  </>);
}
