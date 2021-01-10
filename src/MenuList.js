import React, { useState } from "react";
import { Grid, Container, Fab } from "@material-ui/core";
import MenuItem from "./MenuItem";
import { Check } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { useDispatch, useSelector } from "react-redux";
import { setOrders } from "./redux/actions";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    top: theme.spacing(2),
    right: theme.spacing(2)
  }
}));
const MenuList = ({ match, history }) => {
  const menuItemsInit = [
    { id: 1, qty: 0, name: "King size Burger" },
    { id: 2, qty: 0, name: "Medium Burger" },
    { id: 3, qty: 0, name: "Medium Pizza" },
    { id: 4, qty: 0, name: "Large Pizza" }
  ];

  if (match.params.tableId > 4) {
    history.push("/");
  }
  const classes = useStyles();
  const [menuItems, setMenuItems] = useState(menuItemsInit);
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);

  const onSave = () => {
    console.log(orders);
    const updatedOrders = orders ? { ...orders } : {};
    updatedOrders["Table " + match.params.tableId] = menuItems;
    console.log(updatedOrders);
    dispatch(setOrders(updatedOrders));
  };

  return (
    <Container maxWidth="sm">
      <h1>Table {match.params.tableId}</h1>
      <Grid container direction="column" spacing={3}>
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
      <Fab onClick={onSave} className={classes.fab} color="secondary">
        <Check />
      </Fab>
    </Container>
  );
};

export default MenuList;
