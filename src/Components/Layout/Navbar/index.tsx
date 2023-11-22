import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Logo } from "../../Logo";
import NavigationLink from "./NavigationLink";
import { useState } from "react";
import MobileDrawer from "./MobileDrawer";
import { NavigationItems } from "../../../Data/NavigationLinks";
import { Cross as Hamburger } from "hamburger-react";
import { NavigationContainer, HamburgerContainer } from "./styles";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavigationContainer>
      <AppBar
        component="nav"
        elevation={0}
        color="transparent"
        position="sticky"
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
          <Box sx={{ position: "relative" }}>
            <Logo style={{ visibility: "hidden" }} />
            <Logo
              style={{
                position: "absolute",
                top: 0,
                zIndex: 1501,
              }}
            />
          </Box>
          <HamburgerContainer>
            <Hamburger />
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              label="Mobile menu button to open website navigation links"
            />
          </HamburgerContainer>
          <MobileDrawer open={isOpen} closeDrawer={() => setOpen(false)} />
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              width: "50%",
              justifyContent: "space-around",
              flexGrow: { sm: 1, md: 0 },
            }}
          >
            {NavigationItems.map((navObj) => {
              return (
                <NavigationLink
                  link={navObj.link}
                  label={navObj.label}
                  key={navObj.label}
                />
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>
    </NavigationContainer>
  );
}
