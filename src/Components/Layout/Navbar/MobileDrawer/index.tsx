import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { List, ListItem } from "@mui/material";
import { NavigationItems } from "../../../../Data/NavigationLinks";
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
      PaperProps={{
        sx: { backgroundColor: (theme) => theme.palette.white.main },
      }}
      sx={{ zIndex: 1 }} // 0 when we need cookies banner
    >
      <List sx={{ pt: (theme) => theme.spacing(12) }}>
        {NavigationItems.map((navObj, i) => (
          <ListItem key={i} sx={{ py: 2 }} onClick={props.closeDrawer}>
            <NavigationLink
              link={navObj.link}
              label={navObj.label}
              key={navObj.label}
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default MobileDrawer;
