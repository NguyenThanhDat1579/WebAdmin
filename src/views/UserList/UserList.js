import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { UsersToolbar, UsersTable } from './components';
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

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={classes.root}>
      <UsersToolbar
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        onFilterRole={setSelectedRole}
        selectedRole={selectedRole}
      />
      <div className={classes.content}>
        <UsersTable
          users={users}
          searchTerm={searchTerm}
          selectedRole={selectedRole}
        />
      </div>
    </div>
  );
};

export default UserList;
