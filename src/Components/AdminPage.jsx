import React, {useState, useContext} from 'react';
import {Redirect, Link} from 'react-router-dom';
import axios from 'axios';
import CtxAdmin from './CtxAdmin';
import { CtxEvents} from './CtxEvents';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Collapse from '@material-ui/core/Collapse';
import Dialog from '@material-ui/core/Dialog';
import Alert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';
import Slide from '@material-ui/core/Slide';
import { apiEndPoint } from '../config';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
  alert: {
    height: '100%',
  },
}));

const Transition = React.forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));


const AdminPage = () => {

  const classes = useStyles();
  const [events, setEvents] = useContext(CtxEvents);
  const [admin, setAdmin] = useContext(CtxAdmin);
  const [id, setId] = useState("");
  const [form, setForm] = useState({
    title: '',
    description: '',
    price: '',
    url_image: '',
    date: '',
  });

//-----------Post & verif---------------
  const isEnabled = 
  form.title.length > 0 && 
  form.description.length > 0 && 
  form.price.length > 0;

  const submitForm = () => {
    axios.post(`${apiEndPoint}/event`, {
      title: form.title,
      description: form.description,
      price: form.price,
      url_image: form.url_image,
      date: form.text,
    });
  };

  const [openBad, setOpenBad] = React.useState(false);
  const [openGood, setOpenGood] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEnabled) {
      submitForm();
      setOpenGood(true);
    } else {
      setOpenBad(true);
    }
  };

  const handleClose = () => {
    setOpenBad(false);
  };

//-----------Delete event---------------
  const handleInput= (e) => {
    setId(e.target.value)
  }  
  const deleteEvent = id => {
      axios.delete(`${apiEndPoint}/event/${id}`)
      .then(res => setEvents(res.data));
      
    }
  
//-----------Disconnect---------------
  const disconnect = () => {
    localStorage.removeItem('token');
    window.location.reload(false);
  }

  return (

    <div id="adminPage">
    {!admin.name && <Redirect to='/login'/>}
        <div id="postEvent">
          <h1><strong>Admin</strong></h1>
          
          <div id="obl">
            <p>* Champs obligatoires</p>
          </div>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              label="nom"
              variant="standard"
              value={form.title}
              onChange={(event) => setForm({ ...form, title: event.target.value })}
            />
            <TextField
              id="standard-basic"
              label="objet"
              multiline
              rows="7"
              variant="standard"
              value={form.description}
              onChange={(event) => setForm({ ...form, description: event.target.value })}
            />
            <TextField
              id="standard-basic"
              label="email"
              required="required"
              variant="standard"
              value={form.price}
              onChange={(event) => setForm({ ...form, price: event.target.value })}
            />
            <TextField
              id="standard-multiline-static"
              label="message"
              required="required"
              placeholder="En cas de signalement préciser le numéro de l'annonce"
              variant="standard"
              value={form.url_image}
              onChange={(event) => setForm({ ...form, url_image: event.target.value })}
            />
            <TextField
              id="standard-multiline-static"
              label="message"
              required="required"
              placeholder="En cas de signalement préciser le numéro de l'annonce"
              variant="standard"
              value={form.date}
              onChange={(event) => setForm({ ...form, date: event.target.value })}
            />
          </form>

          <button id="button" type="submit" className="btn btn-primary" onClick={handleSubmit}>Envoyer </button>
          <div id="msgSend">
            <Collapse in={openGood}>
              <Alert
                action={
                  (
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setOpenGood(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  )
                }
              >
                Message envoyé !
              </Alert>
            </Collapse>
          </div>
          <Dialog
            open={openBad}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
            onClick={handleClose}
          >
            <Alert severity="error">Vous devez remplir les champs obligatoires</Alert>
          </Dialog>
        </div>
        <div id='deleteEvent'>
          <label> Numéro de l'annonce :
            <input onChange={handleInput} type="text" name="Numéro de l'annonce" />
          </label>

          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Supprimer</th>
              </tr>
            </thead>
            <tbody>
          
                {events.filter((event) => {
                  console.log(event)
                  if ( id.length > 0 ){
                    return event.id === parseInt(id)
                  }else{
                    return event
                  }        
                })
                  .map((event) => {
                    console.log(event)
                    return(
                    <tr>
                      <td>{event.id}</td>
                      <td>{event.title}</td>
                      <td>{event.description}</td> 
                      <td><button  onClick={() => deleteEvent(event.id)}>Delete</button> </td>     
                    </tr>
                    )})}
            </tbody>
          </table>
        </div>
        <button onClick={disconnect} id="disconect" type="button" className="btn btn-primary">
          <Link to="/login">
            Deconnexion
          </Link>
        </button>   
      </div>
  );
}

export default AdminPage;