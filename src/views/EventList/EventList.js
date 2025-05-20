import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import EventCard from './components/EventCard';
import { getEventList } from '../../api/eventList';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const EventList = () => {
  const classes = useStyles();
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await getEventList();
      setEventData(data);
    };
    fetchEvents();
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        {eventData.map(event => (
          <Grid item key={event._id} lg={4} md={6} xs={12}>
            <EventCard event={event} />

          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default EventList;
