import React from "react";
import { makeStyles } from "@material-ui/core";
import Title from "./Title";

const useStyles = makeStyles((theme) => ({
  root: { borderBottom: `1px solid ${theme.palette.grey[500]}` },
}));

const H2Underline = (props = {}) => {
  let children, className;
  ({ children, className, ...props } = props);

  const classes = useStyles();
  return (
    <Title className={`${className} ${classes.root}`} {...props}>
      {children}
    </Title>
  );
};

export default H2Underline;
