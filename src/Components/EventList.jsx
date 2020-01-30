import React, { useState, useEffect} from 'react';
import { apiEndPoint } from '../config';
import Event from './Event';
import axios from 'axios'

const EventList = () => {

  const [eventlist, setEventList]  = useState([])
  
  useEffect(() => {
    axios.get(`${apiEndPoint}/event/`)
    .then((response, err) => {
      if (err) {
        throw err;
      } else {
        setEventList(response.data);
      }
    });
}, []);
  
  
  return (
    <>
    {eventlist.map(
      (event, index) => {
        return (
          <div key={index}> 
            <Event  event={event}/>
          </div>
        )
      }
    )

    }
    </>
  );
}

export default EventList;