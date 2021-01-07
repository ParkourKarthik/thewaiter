import React from "react";
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
export const tables = ["Table 1", "Table 2", "Table 3", "Table 4"];

const Home = (props) => {
  const classes = useStyles();
  return (
    <div className="App">
      <h1>Choose your table</h1>
      <Grid container direction="column" alignItems={"center"} spacing={3}>
        {tables.map((tableName, i) => {
          return (
            <Grid key={i} item>
              <Card className={classes.root}>
                <CardActionArea
                  onClick={(e) => {
                    console.log(props.history);
                    props.history.push("/tables/" + (i + 1));
                  }}
                >
                  <CardContent>
                    <Typography variant={"h5"} component={"h2"}>
                      {tableName}
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
