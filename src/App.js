import React, { useEffect, useState } from 'react';
import Table from './comp/Table';
import Header from './comp/Header';
import Nav from './comp/Nav';
import Axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'

const userContext = React.createContext();

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

  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([]);

  //Show Users click
  const handleFetchClick = () => {
    fetchUsers(10).then(newUsers =>{ setUsers( oldUser => [ ...oldUser, ...newUsers]) });
  }

  // Show Users loading page
  useEffect(() => {
    fetchUsers(20).then(newUsers =>{ setUsers( oldUser => [ ...oldUser, ...newUsers]) });
  },[])

  // Show users witch filter 
  const usersFiltered = users.filter((user) => user.lastName.toLowerCase().startsWith(search.toLowerCase()))

  return (
    <Router>
      <userContext.Provider value={{users, setUsers}}>
      <div className="container-fluid">
        <Nav/>
      </div>
      <div className="container">
        <Header onFetchClick={handleFetchClick} onSearch={setSearch} search={search} />
        <Switch>
          <Route path="/">
              <Table users={usersFiltered}/>
          </Route>
        </Switch>
      </div>
      </userContext.Provider>
    </Router>
  );
}

function Home() {
  const {users, setUsers} = userContext(userContext);
  return <h2>Accueil</h2>;
}

export default App;
