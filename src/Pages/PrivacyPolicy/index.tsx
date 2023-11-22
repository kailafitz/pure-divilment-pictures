import React from "react";
import { Container, Typography } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Container sx={{ padding: 3 }}>
      <Typography variant="h1" textAlign="center" mb={3}>
        Privacy Policy
      </Typography>
      <Typography variant="body2" mb={2}>
        Pure Divilment Pictures, ("we", "us" or "our"), believes in the
        importance of privacy. The policy below explains how data is collected
        on users, visitors to the website, and how it is used in our company.
      </Typography>
      <Typography variant="body1">How do we collect data?</Typography>
      <Typography variant="body2" mb={2}>
        We use cookies to aggregate data on our website. A cookie is a text file
        placed in a computer browser and acts as a tracking technology.
        Specifically, we use Google Analytics to track visits to our website.
      </Typography>
      <Typography variant="body1">What type of data do we collect?</Typography>
      <ul>
        <li>
          <Typography variant="body1">Personal Data</Typography>
          <Typography variant="body2" mb={2}>
            <b>Anonymized</b> data is collected relating to the demographics,
            geography and activity of a user on the website.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">Device Data</Typography>
          <Typography variant="body2" mb={2}>
            Data is collected on browser and device type which allows us to
            check that the website experience is consistent across all
            platforms.
          </Typography>
        </li>
      </ul>
      <Typography variant="body1">What do we do with the data?</Typography>
      <Typography variant="body2" mb={2}>
        Data collected on visits to our website allows us to optimise our user
        experience through insights gained from aggregated reports on the data.
        Any data collected is deleted after 2 months and is completely
        anonymized. No data is shared with any third-party entities, an entity
        outside of Pure Divilment Pictures.
      </Typography>
    </Container>
  );
};

export default PrivacyPolicy;
