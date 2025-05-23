import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { UsersToolbar, UsersTable } from './components';
import UserDetail from './components/UserDetail';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const UserList = () => {
  const classes = useStyles();

  const [users] = useState(mockData);
  const [selectedRole, setSelectedRole] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={classes.root}>
      {/* Ẩn toolbar nếu đang xem chi tiết */}
      {!selectedUser && (
        <UsersToolbar
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          onFilterRole={setSelectedRole}
          selectedRole={selectedRole}
        />
      )}

      <div className={classes.content}>
        {/* Hiển thị chi tiết nếu có người dùng được chọn */}
        {selectedUser ? (
          <UserDetail
            user={selectedUser}
            onBack={() => setSelectedUser(null)} // <- quay lại danh sách
          />
        ) : (
          <UsersTable
            users={users}
            searchTerm={searchTerm}
            selectedRole={selectedRole}
            onViewDetail={setSelectedUser} // <-- THÊM prop này
          />
        )}
      </div>
    </div>
  );
};

export default UserList;
