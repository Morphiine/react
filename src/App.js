import React, { useEffect, useState } from 'react';
import Table from './comp/Table';
import Header from './comp/Header';
import Axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css'

const fetchUsers = async(qty) => {
  try {
    const { data: {results} } = await Axios.get('https://randomuser.me/api/?results=' +qty); 
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
    // alert('finally');
  }
}

function App() {
  const [users, setUsers] = useState([]);

  const handleFetchClick = () => {
    fetchUsers(10).then(newUsers =>{ setUsers( oldUser => [ ...oldUser, ...newUsers]) });
  }

  useEffect(() => {
    fetchUsers(5).then(newUsers =>{ setUsers( oldUser => [ ...oldUser, ...newUsers]) });
    fetchUsers(5).then(newUsers =>{ setUsers( oldUser => [ ...oldUser, ...newUsers]) });
  },[])

  return (
    <div className="container">
      <Header onFetchClick={handleFetchClick}/>
      <Table users={users}/>
    </div>
  );
}

export default App;
