import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { NavigationItems } from "../navbarLinks";

interface MobileDrawerProps {
  open: boolean;
}

const MobileDrawer = (props: MobileDrawerProps) => {
  return (
    <Drawer anchor="top" open={props.open}>
      <List sx={{ pt: (theme) => theme.spacing(10) }}>
        {NavigationItems.map((text, i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton href={text.link}>
              <ListItemText
                primary={text.linkLabel}
                sx={{ textAlign: "right", textTransform: "uppercase" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default MobileDrawer;
