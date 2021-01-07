import React from "react";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";

const MenuList = ({ match, history }) => {
  const menuItems = [
    "King size Burger",
    "Medium Burger",
    "Medium Pizza",
    "Large Pizza"
  ];
  if (match.params.tableId > 4) {
    history.push("/");
  }
  return (
    <>
      <h1>Table {match.params.tableId}</h1>
      <Grid container direction="column" spacing={3}>
        {menuItems.map((menuItem, i) => {
          return (
            <Grid key={i} item>
              <Card>
                <CardContent>
                  <Typography>{menuItem}</Typography>
                </CardContent>
              </Card>{" "}
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default MenuList;
