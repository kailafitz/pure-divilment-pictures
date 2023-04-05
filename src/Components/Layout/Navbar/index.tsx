import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Logo } from "../../Logo";
import NavigationLink from "./NavigationLink";
import { useState } from "react";
import MobileDrawer from "./MobileDrawer";
import { NavigationItems } from "./navbarLinks";
import { Cross as Hamburger } from "hamburger-react";
import { HamburgerContainer } from "./styles";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        elevation={0}
        color="transparent"
        position="relative"
        sx={{
          padding: (theme) => theme.spacing(2, 0),
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ position: "relative" }}>
            <Logo style={{ visibility: "hidden" }} />
            <Logo style={{ position: "absolute", top: 0, zIndex: 1501 }} />
          </div>

          <HamburgerContainer>
            <Hamburger />
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </HamburgerContainer>
          <MobileDrawer open={isOpen} />
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {NavigationItems.map((navObj) => {
              return (
                <NavigationLink linkObject={navObj} key={navObj.linkLabel} />
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
