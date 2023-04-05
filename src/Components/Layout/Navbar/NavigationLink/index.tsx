import * as React from "react";
import { LinkProps } from "@mui/material/Link";
import { NavLink as ReactRouterLink } from "react-router-dom";
import { StyledLink } from "./styles";

const MyNavLink = React.forwardRef<any, any>((props, ref) => (
  <ReactRouterLink
    ref={ref}
    to={props.to}
    className={({ isActive }) =>
      `${props.className} ${isActive ? "active" : ""}`
    }
  >
    {props.children}
  </ReactRouterLink>
));

export interface CustomLinkProps extends LinkProps {
  linkObject: {
    linkLabel: string;
    link: string;
  };
}

const NavigationLink = (props: CustomLinkProps) => {
  return (
    <StyledLink
      component={MyNavLink}
      to={props.linkObject.link}
      underline="none"
    >
      {props.linkObject.linkLabel}
    </StyledLink>
  );
};

export default NavigationLink;

// https://stackoverflow.com/questions/71350481/react-router-dom-v6-navlink-and-mui-listitem-not-working-with-classname
