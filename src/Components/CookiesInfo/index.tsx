import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { StyledDialog } from "./styles";
import { Stack } from "@mui/material";

export default function PrivacyPolicy() {
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
          This website uses Google Analytics for performance measures to ensure
          a positive user experience in the following ways:
          <ul>
            <li>Records the device type of the user</li>
            <li>Records the browser type of the user</li>
            <li>Records the activity of the user</li>
            <li>Records the demographics of a user</li>
          </ul>
          This website ensures that users are <b>completely</b> anonymized.
        </Typography>
        <Stack>
          <Button
            sx={{
              mb: 1,
              borderRadius: 0,
              "&:hover": {
                background: (theme) => theme.palette.primary.light,
              },
            }}
            variant="contained"
            color="dark"
            onClick={handleClose}
          >
            Deny
          </Button>
          <Button
            sx={{
              borderRadius: 0,
              "&:hover": {
                background: (theme) => theme.palette.primary.light,
              },
            }}
            variant="contained"
            color="dark"
            onClick={handleClose}
          >
            Accept
          </Button>
        </Stack>
      </Stack>
    </StyledDialog>
  );
}
