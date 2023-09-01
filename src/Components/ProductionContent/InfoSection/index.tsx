import { Box, Typography } from "@mui/material";
import React, { ReactNode } from "react";

type InfoSectionProps = {
  children: ReactNode;
  title: string;
  alignment: string;
};

const InfoSection = (props: InfoSectionProps) => {
  return (
    <Box sx={{ textAlign: { xs: "center", lg: props.alignment } }}>
      <Typography
        variant="body2"
        sx={{
          fontWeight: 500,
          mb: 3,
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
