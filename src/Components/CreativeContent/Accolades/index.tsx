import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { ListItemInterface } from "../../../Data/CreativesData";

export interface ListItemInterfaces {
  accolades: ListItemInterface[];
}

export const Accolades = (props: ListItemInterfaces) => {
  return (
    <>
      <Typography textAlign="left" variant="h6">
        Accolades
      </Typography>
      <List dense={true}>
        {props.accolades.map((accolade: ListItemInterface, i) => {
          const Accolade = () => {
            return (
              <>
                <span
                  style={{
                    fontWeight: 700,
                    textTransform: "uppercase",
                  }}
                >
                  {accolade.title}
                </span>
                <span>{accolade.heading}</span>
                <br />
                {accolade.affiliates}
              </>
            );
          };

          return (
            <ListItem key={i} sx={{ py: 1, pl: 3, textAlign: "left" }}>
              <ListItemText primary={<Accolade />} />
            </ListItem>
          );
        })}
      </List>
    </>
  );
};
