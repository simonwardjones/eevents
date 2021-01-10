import React from "react";
import MUIGrid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      // maxWidth: "100%",
      // margin: `${theme.spacing(5)}px auto`,
    },
  };
});

const GridContainer = (props = {}) => {
  let children, className, spacing, spacingY;
  ({ children, className = "", spacing = 5, spacingY = 1, ...props } = props);

  const classes = useStyles();

  let spacingYOptions = ["spacing-y-0", ""];
  let spacingYClassName = spacingYOptions[spacingY];

  return (
    <MUIGrid
      container
      className={`${className} ${classes.root} ${spacingYClassName}`}
      spacing={spacing}
      {...props}
    >
      {children}
    </MUIGrid>
  );
};

export default GridContainer;
