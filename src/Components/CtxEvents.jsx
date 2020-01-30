import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { apiEndPoint } from '../config';

export const CtxEvents = createContext();

export const EventsProvider = ({ children }) => {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    axios.get(`${apiEndPoint}/event`)
      .then((response, err) => {
        if (err) {
          throw err;
        } else {
          setEvent(response.data);
        }
      });
  }, []);

  return (
    <CtxEvents.Provider value={[event, setEvent]}>
      {children}
    </CtxEvents.Provider>
  );
};