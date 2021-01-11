import React, { useEffect, useState } from 'react';
import {
  Grid,
  Container,
  Card,
  CardContent,
  Typography,
  ListItem,
  List,
  ListItemText,
  Divider,
  ListItemSecondaryAction
} from '@material-ui/core';
import { loadState } from './redux/localStorage';

const Orders = () => {
  const [orders, setOrders] = useState(loadState()?.orders || {});
  const orderList = [];
  useEffect(() => {
    const interval = setInterval(() => {
      // states are different in different tabs, so there is a need to load from localStorage manually
      setOrders(loadState()?.orders || {});
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  for (const property in orders) {
    orderList.push(
      <Grid key={property} item>
        <Card>
          <CardContent>
            <Typography variant='h5' component='h2'>
              {property}
            </Typography>
            <Divider />
            <List>
              {orders[property]
                .filter(x => x.qty)
                .map((item, i) => {
                  return (
                    <ListItem key={i}>
                      <ListItemText primary={item.name} />
                      <ListItemSecondaryAction>
                        <ListItemText primary={item.qty} />
                      </ListItemSecondaryAction>
                    </ListItem>
                  );
                })}
            </List>
          </CardContent>
        </Card>
      </Grid>
    );
  }
  return (
    <Container maxWidth='xs'>
      <h1>Orders</h1>
      <Grid container direction='column' spacing={3}>
        {orderList.length ? orderList : <Grid item>{'No orders'}</Grid>}
      </Grid>
    </Container>
  );
};

export default Orders;
