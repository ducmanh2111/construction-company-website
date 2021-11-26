import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Container, Table, Button } from 'react-bootstrap';
import { sortBy } from 'lodash';
import HouseCategory from './HouseCategory';
import { useDispatch, useSelector } from 'react-redux';
import { listHouseCategory } from '../../redux/actions/houseCategory';

export default function ListHouseCategory() {
  const houseCategories = useSelector(state => state.houseCategory.list);
  const dispatch = useDispatch();

  const [reload, setReload] = useState(false);
  const [displayHouseCategories, setDisplayHouseCategories] = useState([]);

  useEffect(() => {
    dispatch(listHouseCategory());
  }, [reload, dispatch]);

  useEffect(() => {
    setDisplayHouseCategories(sortBy(houseCategories, ['id']))
  }, [houseCategories])

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
          {displayHouseCategories.map((houseCategory, index) =>
            <HouseCategory houseCategory={houseCategory} key={index} reload={reload} setReload={setReload}/>
          )}
        </tbody>
      </Table>
    </Container>
  </>);
}
