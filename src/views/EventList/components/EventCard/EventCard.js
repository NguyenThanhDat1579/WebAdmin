import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Divider
} from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { useHistory } from 'react-router-dom'; // 👈 Thêm dòng này

const useStyles = makeStyles(theme => ({
  root: {
    cursor: 'pointer' // 👈 Đổi con trỏ khi hover
  },
  imageContainer: {
    height: 180,
    width: '100%',
    borderRadius: '8px',
    overflow: 'hidden',
    marginBottom: theme.spacing(2)
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  statsItem: {
    display: 'flex',
    alignItems: 'center'
  },
  statsIcon: {
    color: theme.palette.icon,
    marginRight: theme.spacing(1)
  }
}));

const EventCard = ({ className, event, ...rest }) => {
  const classes = useStyles();
  const history = useHistory(); // 👈 Khởi tạo history

  const handleClick = () => {
    history.push(`/events/detail/${event._id}`); // 👈 Điều hướng khi bấm vào
  };

  return (
    <Card {...rest} className={clsx(classes.root, className)} onClick={handleClick}>
      <CardContent>
        <div className={classes.imageContainer}>
          <img alt={event.name} className={classes.image} src={event.avatar} />
        </div>
        <Typography align="center" gutterBottom variant="h5">
          {event.name}
        </Typography>
        <Typography align="center" color="textSecondary" variant="body2">
          {event.location}
        </Typography>
        <Divider style={{ margin: '16px 0' }} />
        <Grid container justify="space-between">
          <Grid item className={classes.statsItem}>
            <AccessTimeIcon className={classes.statsIcon} />
            <Typography variant="body2">
              {new Date(event.timeStart).toLocaleString()} -<br />
              {new Date(event.timeEnd).toLocaleString()}
            </Typography>
          </Grid>
          <Grid item className={classes.statsItem}>
            <RoomIcon className={classes.statsIcon} />
            <Typography variant="body2">Hải Phòng</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

EventCard.propTypes = {
  className: PropTypes.string,
  event: PropTypes.object.isRequired
};

export default EventCard;
