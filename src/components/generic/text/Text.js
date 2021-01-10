import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const Text = (props = {}) => {
  let children, className, align, centerXs;
  ({
    children,
    className = "",
    align = "left",
    centerXs = true,
    ...props
  } = props);

  const classes = makeStyles((theme) => ({
    root: { textAlign: align },
  }))();

  const centerXsClass = centerXs ? "text-center-xs" : "";

  return (
    <p className={`${className} ${classes.root} ${centerXsClass}`} {...props}>
      {children}
    </p>
  );
};

export default Text;
