import React from "react";
import { Box, Typography } from "@mui/material";

type LoaderProps = {
  title: string;
};

const Loader = (props: LoaderProps) => {
  return (
    <Box
      sx={{
        background: (theme) => theme.palette.common.black,
        width: "100vw",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 3,
        animation:
          "slide-out-container 2s cubic-bezier(0.97, 0.01, 0.36, 0.99)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography
        textAlign="center"
        color="common.white"
        sx={{
          animation: "visible 1.8s linear 1s 1 forwards",
          "&::first-letter": {
            fontStyle: "italic",
            marginRight: "3px",
          },
        }}
      >
        {props.title}
      </Typography>
    </Box>
  );
};

export default Loader;
