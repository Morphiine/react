import React, { useEffect, useState } from 'react';
import Table from './comp/Table';
import Header from './comp/Header';
import Axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css'

const fetchUsers = async() => {
  try {
    const { data: {results} } = await Axios.get('https://randomuser.me/api/?results=40'); 
    return results.map(result => (
      {
        id: result.login.uuid,
        firstName: result.name.first, 
        lastName: result.name.last, 
        picture: result.picture.thumbnail,
        phone: result.phone,
        email: result.email 
      }
    ));
  } catch(e) {
    console.error(e);
    return [];
  } finally {

  }
}

function App() {

  const [users, setUsers] = useState([]);

  const handleFetchClick = () => {
    fetchUsers().then(setUsers);
  }

  useEffect(() => {
    console.log('ok');
  });

  return (
    <div className="container">
      <Header onFetchClick={handleFetchClick}/>
      <Table users={users}/>
    </div>
  );
}

export default App;
