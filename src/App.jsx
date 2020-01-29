import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import AdminPage from './Components/AdminPage';
import Login from './Components/Login';
import ProgPage from './Components/ProgPage';
import InfoPage from './Components/InfoPage';
import Event from './Components/Event';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import CtxAdmin from './Components/CtxAdmin';
import './CSS/App.css';
import { apiEndPoint } from './config';
import axios from 'axios';

const App = () => {
  const [admin, setAdmin] = useState({
    name: null,
    email: null
  });

  useEffect(() => {
    if (localStorage.getItem('token')) {
      axios.get(`${apiEndPoint}/admin`, {                
        headers: {                                              
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then((response, err) => {
        if (err) {
          console.log(err);
        }
        setAdmin(response.data);
      })
    } else {
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <CtxAdmin.Provider value={[admin, setAdmin]}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/progPage" component={ProgPage} />
            <Route path="/event/:id" component={Event} />
            <Route path="/adminPage" component={AdminPage} />
            <Route path="/login" component={Login} />
            <Route path="/info" component={InfoPage} />
          </Switch>
        </CtxAdmin.Provider>
        <Footer/>
      </div>
    </Router>

  );
}

export default App;
