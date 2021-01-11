import React, { useState } from 'react';
import { Grid, Container, Fab } from '@material-ui/core';
import MenuItem from './MenuItem';
import { Check } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { setOrders } from './redux/actions';
import { useSnackbar } from 'notistack';

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2)
  }
}));
const MenuList = ({ match, history }) => {
  if (match.params.tableId > 4 || !match.params.tableId) {
    history.push('/');
  }
  const classes = useStyles();
  const orders = useSelector(state => state.orders);
  const menuItemsInit = useSelector(state => state.menus);
  const currentOrder = orders['Table ' + match.params.tableId];
  const menuItms = [...menuItemsInit];
  const [menuItems, setMenuItems] = useState(currentOrder || menuItms);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const onSave = () => {
    const updatedOrders = orders ? { ...orders } : {};
    updatedOrders['Table ' + match.params.tableId] = menuItems;
    dispatch(setOrders(updatedOrders));
    enqueueSnackbar('Order successful', { variant: 'success' });
  };

  return (
    <Container maxWidth='xs'>
      <h1>Table {match.params.tableId}</h1>
      <Grid container direction='column' spacing={3}>
        {menuItems.map((menuItem, i) => {
          return (
            <MenuItem
              key={i}
              index={i}
              order={menuItem}
              orders={menuItems}
              setOrders={setMenuItems}
            />
          );
        })}
      </Grid>
      <Fab onClick={onSave} className={classes.fab} color='secondary'>
        <Check />
      </Fab>
    </Container>
  );
};

export default MenuList;
