import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button, ButtonGroup } from '@material-ui/core';

import { SearchInput } from 'components';

const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  searchInput: {
    marginRight: theme.spacing(2)
  }
}));

const UsersToolbar = props => {
  const {
    className,
    onSearchChange,
    onFilterRole,
    selectedRole,
    searchTerm,
    ...rest
  } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.row}>
        <span className={classes.spacer} />
        <Button color="primary" variant="contained">
          Add user
        </Button>
      </div>
      <div className={classes.row}>
        <SearchInput
          className={classes.searchInput}
          placeholder="Search user"
          value={searchTerm}
          onChange={onSearchChange}
        />

        <ButtonGroup variant="outlined" color="primary">
          <Button
            variant={selectedRole === null ? 'contained' : 'outlined'}
            onClick={() => onFilterRole(null)}>
            Tất cả
          </Button>
          <Button
            variant={selectedRole === 3 ? 'contained' : 'outlined'}
            onClick={() => onFilterRole(3)}>
            Người dùng
          </Button>
          <Button
            variant={selectedRole === 2 ? 'contained' : 'outlined'}
            onClick={() => onFilterRole(2)}>
            Nhà tổ chức
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

UsersToolbar.propTypes = {
  className: PropTypes.string,
  onSearchChange: PropTypes.func.isRequired,
  onFilterRole: PropTypes.func.isRequired,
  selectedRole: PropTypes.number,
  searchTerm: PropTypes.string
};

export default UsersToolbar;
