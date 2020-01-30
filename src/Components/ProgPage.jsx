import React, { useState }  from 'react';
import Calendar from 'react-calendar';
import EventList from './EventList';
import '../CSS/ProgPage.css';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';


const useStyles = makeStyles(theme => ({
  gridList: {
    width: 600,
    height: 400,
    border: "solid 1px"
  },
}));


const ProgPage = () => {

  const classes = useStyles();
  const [date, setDate] = useState(new Date())

  
  const handdleNewDate = (newDate) => {
    setDate({ newDate })
  }
  
  return (
    <div id="ProgPageBody">
      
      <GridList cellHeight={160} cellWidth={100} className={classes.gridList} cols={3}>
        <EventList/>
      </GridList>
      <Calendar
        onChange={handdleNewDate}          
      />
    <p>date: {date.toLocaleDateString()}</p>
    </div>

  );
}

export default ProgPage;