import React from "react";

import MUIBox from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    box: { padding: theme.spacing(2) },
  };
});

const Section = (props = {}) => {
  let children, className;
  ({ children, className, ...props } = props);

  const classes = useStyles();

  return (
    <MUIBox className={`${className} ${classes.box}`} {...props}>
      {children}
    </MUIBox>
  );
};

export default Section;
