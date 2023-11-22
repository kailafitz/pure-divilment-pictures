import * as React from "react";
import { LinkProps } from "@mui/material/Link";
import { NavLink as ReactRouterLink } from "react-router-dom";
import { StyledLink, StyledSpan, StyledFirstLetter } from "./styles";

export const MyNavLink = React.forwardRef<any, any>((props, ref) => (
  <ReactRouterLink
    ref={ref}
    to={props.to}
    className={({ isActive }) =>
      `${props.className} ${isActive ? "active" : ""}`
    }
    aria-label={props.ariaLabel}
  >
    {props.children}
  </ReactRouterLink>
));

export interface CustomLinkProps extends LinkProps {
  label: string;
  link: string;
  ariaLabel?: string;
}

const NavigationLink = (props: CustomLinkProps) => {
  let firstLetter = props.label.charAt(0);
  return (
    <StyledLink
      component={MyNavLink}
      to={props.link}
      aria-label={props.ariaLabel}
      className="nav-link"
    >
      {props.label}
      <StyledFirstLetter>{firstLetter}</StyledFirstLetter>
      <StyledSpan>{props.label}</StyledSpan>
    </StyledLink>
  );
};

export default NavigationLink;

// https://stackoverflow.com/questions/71350481/react-router-dom-v6-navlink-and-mui-listitem-not-working-with-classname
