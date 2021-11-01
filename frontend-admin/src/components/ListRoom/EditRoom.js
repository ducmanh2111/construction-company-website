import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import roomApi from '../../services/roomApi';

export default function EditRoom() {
  const [id, setId] = useState(1);

  useEffect(() => {
    roomApi.get(id).then(data => {
    })
  }, []);

  return(<>
    <h1>Vao man hinh edit roi nay
    </h1>
  </>);
}
