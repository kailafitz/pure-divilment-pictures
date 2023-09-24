import { Box, Typography } from "@mui/material";
import React, { ReactNode } from "react";

type InfoSectionProps = {
  children: ReactNode;
  title: string;
  alignment: string;
};

const InfoSection = (props: InfoSectionProps) => {
  return (
    <Box sx={{ textAlign: { xs: "center", md: props.alignment } }}>
      <Typography
        variant="body2"
        sx={{
          fontWeight: 700,
          mb: 1.5,
          textTransform: "uppercase",
        }}
      >
        {props.title}
      </Typography>
      {props.children}
    </Box>
  );
};

export default InfoSection;
