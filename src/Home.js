import React from "react";
import { useSelector } from "react-redux";
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  }
});

const Home = (props) => {
  const tables = useSelector((state) => state.tables);
  const classes = useStyles();
  return (
    <div className="App">
      <h1>Choose your table</h1>
      <Grid container direction="column" alignItems={"center"} spacing={3}>
        {tables.map((table, i) => {
          return (
            <Grid key={i} item>
              <Card className={classes.root}>
                <CardActionArea
                  onClick={(e) => {
                    props.history.push("/tables/" + table.id);
                  }}
                >
                  <CardContent>
                    <Typography variant={"h5"} component={"h2"}>
                      {table.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>{" "}
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Home;
