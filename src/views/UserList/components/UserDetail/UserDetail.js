// src/views/UserList/UserDetail.js
import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Grid,
  Box,
  Divider
} from '@material-ui/core';
import moment from 'moment';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const UserDetail = ({ user, onBack }) => {
  console.log('User data:', user);
  if (!user) return null;
  return (
    <Card
      elevation={4}
      style={{ maxWidth: 600, margin: 'auto', marginTop: 40 }}>
      <CardContent>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mb={2}>
          <Button
            onClick={onBack}
            startIcon={<ArrowBackIcon />}
            variant="outlined"
            color="primary">
            Quay lại
          </Button>
          <Typography variant="h5" style={{ fontWeight: 600 }}>
            Chi tiết người dùng
          </Typography>
        </Box>

        <Divider style={{ marginBottom: 20 }} />

        <Box display="flex" alignItems="center" mb={3}>
          <Avatar
            src={user.picUrl || ''}
            alt={user.username}
            style={{ width: 80, height: 80, marginRight: 20 }}>
            {user.username?.charAt(0).toUpperCase()}
          </Avatar>
          <Box>
            <Typography variant="h6">{user.username}</Typography>
          </Box>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="subtitle2" color="textSecondary">
              Email
            </Typography>
            <Typography>{user.email}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle2" color="textSecondary">
              Số điện thoại
            </Typography>
            <Typography>
              {user.phoneNumber ? `0${user.phoneNumber}` : ''}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle2" color="textSecondary">
              Vai trò
            </Typography>
            <Typography>
              {user.role === 3
                ? 'Người dùng'
                : user.role === 2
                ? 'Nhà tổ chức'
                : 'Khác'}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle2" color="textSecondary">
              Ngày đăng ký
            </Typography>
            <Typography>
              {moment(user.createdAt).format('DD/MM/YYYY')}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default UserDetail;
