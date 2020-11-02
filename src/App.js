import React, { useEffect, useState } from 'react';
import Header from './comp/Header';
import Nav from './comp/Nav';
import Home from './comp/Home';
import ShowUser from './comp/ShowUser';
import Axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

const fetchUsers = async(qty) => {
  try {
    const { data: {results} } = await Axios.get('https://randomuser.me/api/?results=' +qty);
    return results.map(result => (
      {
        id: result.login.uuid,
        firstName: result.name.first, 
        lastName: result.name.last, 
        thumbnail: result.picture.thumbnail,
        large: result.picture.large,
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


    // Show Users click
    const handleFetchClick = () => {
        localStorage.removeItem('users');
        fetchUsers(10).then(newUsers =>{ setUsers( oldUser => [ ...oldUser, ...newUsers]) });
    }
    // Filter by
    const handleChangeSearch = (e) => {
      console.log(e);
    }

    // Show Users loading page
    useEffect(() => {
        const localStorageUsers = window.localStorage.getItem('users');

        if (localStorageUsers){
            setUsers(JSON.parse(localStorageUsers));
        } else {
            fetchUsers(20).then(newUsers => setUsers( oldUser => [ ...oldUser, ...newUsers]));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

    // Show users witch filter 
    const usersFiltered = users.filter((user) => user.lastName.toLowerCase().startsWith(search.toLowerCase()))

    return (
        <Router>
          <div className="container-fluid">
            <Nav/>
          </div>
          <div className="container">
            <Switch>
                <Route exact path="/">
                    <Header onSearch={setSearch} search={search} onFetchClick={ handleFetchClick } onChangeSearch={ handleChangeSearch }/>
                    <Home users={ usersFiltered }/>
                </Route>
                <Route path="/user/:userid">
                    <ShowUser users={ users }/>
                </Route>
            </Switch>
          </div>
        </Router>
    );
}

export default App;
