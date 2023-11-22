import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { StyledDialog } from "./styles";
import { Link, Stack } from "@mui/material";

export default function ConsentBanner() {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledDialog
      fullWidth
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: (theme) => theme.palette.white.main,
          color: (theme) => theme.palette.primary.main,
          minWidth: "100vw",
          margin: 0,
          alignSelf: "end",
          borderRadius: 0,
        },
      }}
    >
      <Stack
        p={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography sx={{ fontSize: ".8rem" }}>
          We value your privacy. Cookies are used only to monitor traffic so
          that we may provide the best experience possible on our website.{" "}
          <Link href="/privacy-policy">Read our cookie policy here.</Link>
        </Typography>
        <Stack direction={{ xs: "column", md: "row" }}>
          {/* <Button
            sx={{
              mb: { xs: 1, md: 0 },
              mr: {
                xs: 0,
                md: 1,
              },
              borderRadius: 0,
              "&:hover": {
                background: (theme) => theme.palette.primary.light,
              },
            }}
            variant="contained"
            color="primary"
            onClick={handleClose}
          >
            Deny
          </Button> */}
          <Button
            sx={{
              borderRadius: 0,
              "&:hover": {
                background: (theme) => theme.palette.primary.light,
              },
            }}
            variant="contained"
            color="primary"
            onClick={handleClose}
          >
            Continue
          </Button>
        </Stack>
      </Stack>
    </StyledDialog>
  );
}
