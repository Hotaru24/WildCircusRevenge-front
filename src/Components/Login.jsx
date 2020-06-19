import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import CtxAdmin from './CtxAdmin';
import axios from 'axios';
import { apiEndPoint } from '../config';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      marginBottom: "20px",
    },
  }
}));

const Login = () => {
  const classes = useStyles();
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const [adminToken, setAdminToken] = useState(null);
  const [admin, setAdmin] = useContext(CtxAdmin);

  const submitForm = () => {
    axios.post(`${apiEndPoint}/login/`, {
      email: form.email,
      password: form.password
    }).then(result => {
      if (result.status === 200) {
        localStorage.setItem('token', result.data.token);
        setAdmin(result.data.admin);
        setAdminToken(result.data.adminToken);
      }
    })
  }

  return (
    <div id='background'>
      {admin.name && <Redirect to='/adminPage'/>}  
      <div id='middle-page'>
        <div id='Login'>
        <h1>Administrateur</h1>
        <form className={classes.root} noValidate autoComplete="off">
           <TextField
            className="input"
            type="email"
            label="email"
            required="required"
            variant="outlined"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
          />
          <TextField
            className="input"
            type="password"
            label="mot de passe"
            required="required"
            variant="outlined"
            value={form.password}
            onChange={(event) => setForm({ ...form, password: event.target.value })}
          />
        </form>
        <button id='button' type="submit" className="btn btn-primary" onClick={submitForm}> Connexion </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
