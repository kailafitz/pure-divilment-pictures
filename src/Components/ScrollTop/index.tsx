import { Box, Button, Fade, useScrollTrigger } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export const ScrollTop = () => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#all-productions");

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          zIndex: 10,
        }}
      >
        <Button color="primary" variant="contained">
          {/* Back to Productions */}
          <ExpandLessIcon />
        </Button>
      </Box>
    </Fade>
  );
};
