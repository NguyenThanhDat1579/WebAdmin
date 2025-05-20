import React from 'react';
import  { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core';
import { getEventRevenue } from 'api/eventRevenue';
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4)
  },
  card: {
    padding: theme.spacing(2)
  },
  statTitle: {
    fontWeight: 500
  },
  tableHead: {
    fontWeight: 600
  }
}));


const Dashboard = () => {
  const classes = useStyles();
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await getEventRevenue();
      setEventData(data);
    };  
    fetchEvents();
  }, []);
  const totalEvents = eventData.length;
  const totalTickets = eventData.reduce((sum, e) => sum + e.soldTickets, 0);
  const totalRevenue = eventData.reduce((sum, e) => sum + e.revenue, 0);

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.statTitle} variant="h6">
                Tổng Sự Kiện
              </Typography>
              <Typography variant="h4">{totalEvents}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.statTitle} variant="h6">
                Tổng Vé Đã Bán
              </Typography>
              <Typography variant="h4">{totalTickets}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.statTitle} variant="h6">
                Tổng Doanh Thu
              </Typography>
              <Typography variant="h4">{totalRevenue.toLocaleString()}₫</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box mt={4}>
        <Typography variant="h5" gutterBottom>
          Danh sách sự kiện
        </Typography>
        <Card>
          <CardContent>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableHead}>Tên sự kiện</TableCell>
                  <TableCell className={classes.tableHead}>Vé đã bán</TableCell>
                  <TableCell className={classes.tableHead}>Doanh thu</TableCell>
                  <TableCell className={classes.tableHead}>Trạng thái</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {eventData.map((event) => (
                  <TableRow key={event.id}>
                    <TableCell>{event.name}</TableCell>
                    <TableCell>{event.soldTickets}</TableCell>
                    <TableCell>{event.revenue.toLocaleString()}₫</TableCell>
                    <TableCell>{event.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default Dashboard;
