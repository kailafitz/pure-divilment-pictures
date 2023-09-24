import React from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { ListItemInterface } from "../../../Data/CreativesData";

type CreditsInterface = {
  credits: ListItemInterface[];
};

export const Credits = (props: CreditsInterface) => {
  return (
    <>
      <Typography variant="h6">Credits</Typography>
      <List dense={true}>
        {props.credits.map((credit: ListItemInterface, i) => {
          const Credit = () => {
            return (
              <>
                <span style={{ fontWeight: 700, fontStyle: "italic" }}>
                  {credit.title}
                </span>
                <span style={{ fontWeight: 700 }}> {credit.year}</span>
                <span>{credit.heading}</span>
                <br />
                {credit.affiliates}
              </>
            );
          };

          return (
            <ListItem key={i} sx={{ py: 1, pl: 3 }}>
              <ListItemText primary={<Credit />} />
            </ListItem>
          );
        })}
      </List>
    </>
  );
};
