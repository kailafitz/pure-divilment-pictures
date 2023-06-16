import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { List, ListItem } from "@mui/material";
import { NavigationItems } from "../navbarLinks";
import NavigationLink from "../NavigationLink";

interface MobileDrawerProps {
  open: boolean;
  closeDrawer: React.MouseEventHandler<HTMLLIElement>;
}

const MobileDrawer = (props: MobileDrawerProps) => {
  return (
    <Drawer
      anchor="top"
      open={props.open}
      sx={{ zIndex: 1, backgroundColor: (theme) => theme.palette.white.main }}
    >
      <List sx={{ pt: (theme) => theme.spacing(12) }}>
        {NavigationItems.map((navObj, i) => (
          <ListItem key={i} sx={{ py: 2 }} onClick={props.closeDrawer}>
            <NavigationLink linkObject={navObj} key={navObj.linkLabel} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default MobileDrawer;
