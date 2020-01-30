import React from 'react';
import { Map, TileLayer, Marker, Popup} from 'react-leaflet';
import '../CSS/infoPage.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
    paper: {
      padding: '10px',
    }
  },
}));

const InfoPage = () => {
  const classes = useStyles();
  const position = [47.20721169, -1.55577511];

return (
  <div id="infoPageBody">

    <div id="map">
      <div id="adress">
        <h2>Adress</h2>
        <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. <br/>
          Suspendisse lectus tortor, dignissim sit amet, <br/> adipiscing nec, ultricies sed, dolor. </p>
      </div>
      <Map center={position} zoom={13}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              Wild Circus
            </Popup>
          </Marker>
        </Map>
    </div>

    <div id="info">
      <div id="hours">
        <Paper className={classes.paper}>      
          <h1>Hours</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. <br/>
              Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. </p>       
        </Paper>
      </div>
      <div id="accessibility">
        <Paper className={classes.imageBackdrop}>
          <h1>Accessibility</h1>
          <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. <br/>
              Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. </p>
        </Paper>
      </div>
    </div>

    <div id="contact">
      <h1>Contact</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. 
        Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. 
        Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. 
        Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. 
        Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.  </p>
    </div>  

  </div>

  );
}

export default InfoPage;