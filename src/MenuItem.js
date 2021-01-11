import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions
} from '@material-ui/core';
import Adder from './Adder';

const MenuItem = ({ order, orders, setOrders, index }) => {
  const [count, setCount] = useState(order.qty || 0);
  const updateCount = count => {
    setCount(count);
    if (count !== 0) {
      const newOrder = { ...order };
      newOrder.qty = count;
      const newOrders = [...orders];
      newOrders[index] = newOrder;
      setOrders(newOrders);
    }
  };
  return (
    <Grid item>
      <Card>
        <CardContent>
          <Typography>{order.name}</Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Adder count={count} updateCount={updateCount} />
        </CardActions>
      </Card>{' '}
    </Grid>
  );
};

export default MenuItem;
