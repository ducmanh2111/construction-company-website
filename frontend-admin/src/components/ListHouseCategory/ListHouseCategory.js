import React, {useEffect, useState} from 'react';
import HouseCategory from './HouseCategory';
import { Container, Table } from 'react-bootstrap';
import houseCategoryApi from '../../services/houseCategoryApi';

export default function ListHouseCategory() {

  const [houseCategories, setHouseCategories] = useState([]);

  useEffect(() => {
    houseCategoryApi.list().then(data => {
      setHouseCategories(data.house_categories);
    })
  }, []);

  return (<>
    <Container className="mt-5">
      <h1>List House Category</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody className="text-center">
          { houseCategories.map((houseCategory, index) =>
            <HouseCategory houseCategory={ houseCategory } key={ index }/>
          )}
        </tbody>
      </Table>
    </Container>
  </>);
}
