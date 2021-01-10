import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Title from "../text/Title";

const PlusAccordion = (props = {}) => {
  let children, summary, className, outline;
  ({ children, summary, className = "", outline = 0 } = props);

  let outlineOptions = ["outline_none", "outline_divider", ""];
  let outlineClassName = outlineOptions[outline];

  return (
    <Accordion className={`${className} ${outlineClassName}`}>
      <AccordionSummary>
        <Title size={2}>+ {summary}</Title>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default PlusAccordion;
