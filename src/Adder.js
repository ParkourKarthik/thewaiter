import { IconButton } from "@material-ui/core";
import { AddBox, IndeterminateCheckBox } from "@material-ui/icons";
import React from "react";

const Adder = (props) => {
  const updateCount = (add) => {
    const newCount = Math.max(0, props.count + add);
    props.updateCount(newCount);
  };
  return (
    <div style={{ marginLeft: "auto" }}>
      <IconButton
        color="secondary"
        disableRipple
        size="small"
        onClick={(e) => updateCount(-1)}
      >
        <IndeterminateCheckBox fontSize="small" />
      </IconButton>
      {props.count}
      <IconButton
        color="secondary"
        size="small"
        onClick={(e) => updateCount(1)}
      >
        <AddBox fontSize="small" />
      </IconButton>
    </div>
  );
};

export default Adder;
