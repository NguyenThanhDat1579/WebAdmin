import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEventDetail } from '../../api/eventDetail'; 
import {
  Typography,
  Card,
  CardContent,
  CircularProgress,
  Container
} from '@material-ui/core';

const EventDetail = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      const data = await getEventDetail(eventId);
      setEvent(data);
      setLoading(false);
    };
    fetchDetail();
  }, [eventId]);

  if (loading) {
    return (
      <Container style={{ textAlign: 'center', marginTop: 50 }}>
        <CircularProgress />
      </Container>
    );
  }

  if (!event) {
    return (
      <Container style={{ textAlign: 'center', marginTop: 50 }}>
        <Typography variant="h6" color="error">Không tìm thấy sự kiện</Typography>
      </Container>
    );
  }

  return (
   <Container maxWidth={false} style={{ marginTop: 40 }}>

      <Card>
        <CardContent>
          <img
            src={event.avatar}
            alt={event.name}
            style={{ width: '100%', borderRadius: 8, marginBottom: 16 }}
          />
          <Typography variant="h4" gutterBottom>{event.name}</Typography>
          <Typography variant="subtitle1" gutterBottom color="textSecondary">
            {event.location}
          </Typography>
          <Typography variant="body1" paragraph>
            Thời gian: {new Date(event.timeStart).toLocaleString()} - {new Date(event.timeEnd).toLocaleString()}
          </Typography>
          <Typography variant="body2" paragraph>
            {event.description || 'Không có mô tả'}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default EventDetail;
