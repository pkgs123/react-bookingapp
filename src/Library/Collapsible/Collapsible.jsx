import * as React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Stack } from "@mui/material";

import "./Collapsible.scss";

export const Collapsible = ({
  title,
  shouldBeExpended,
  statusIcon,
  children,
  onChange,
}) => {
  return (
    <div className="container">
      <div key={title} className="mb-2">
        <Accordion
          id="collapsible"
          defaultExpanded={shouldBeExpended}
          disableGutters={true}
          square={true}
          onChange={onChange}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon id="collapsible-icon" />
            }
            aria-controls={`${title}-content`}
            id={`${title}-header`}
          >
            <Stack
              direction="row"
              alignItems="center"
              gap={1}
            >
              {statusIcon && statusIcon}
              <Typography>{title}</Typography>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>{children}</AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
