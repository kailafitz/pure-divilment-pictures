import React from "react";
import {
  Checkbox,
  Container,
  FormControlLabel,
  Typography,
} from "@mui/material";

const ToDo = () => {
  return (
    <Container sx={{ display: "flex", flexDirection: "column", py: 5 }}>
      <Typography variant="h5" mb={1} mt={3}>
        General
      </Typography>
      <FormControlLabel
        control={<Checkbox />}
        label="Alternative for Canva Sans"
      />
      <FormControlLabel
        control={<Checkbox checked />}
        label="Favicon updated with black background (tab icon)"
      />
      <FormControlLabel control={<Checkbox />} label="License for Gellalio?" />
      <FormControlLabel
        control={<Checkbox />}
        label="Accessibility attributes"
      />
      <Typography variant="h5" mb={1} mt={3}>
        Navigation
      </Typography>
      <FormControlLabel
        control={<Checkbox checked />}
        label="Pure Divilment Logo a tiny bit bigger on navigation"
      />
      <FormControlLabel
        control={<Checkbox checked />}
        label="Centre it so the white space top and bottom of the logo is the same size"
      />
      <FormControlLabel
        control={<Checkbox checked />}
        label="Nav links hover effect"
      />
      <FormControlLabel
        control={<Checkbox checked />}
        label="Nav links hover effect animation"
      />
      <FormControlLabel
        control={<Checkbox checked />}
        label="The Team replaced with The Creatives"
      />
      <FormControlLabel
        control={<Checkbox checked />}
        label="Display navigation bar on scroll"
      />
      <FormControlLabel control={<Checkbox checked />} label="About link fix" />
      <Typography variant="h5" mb={1} mt={3}>
        Opening Animation
      </Typography>
      <FormControlLabel
        control={<Checkbox checked />}
        label="Capitalized letters"
      />
      <FormControlLabel
        control={<Checkbox checked />}
        label="Slow fade in and hold of the PD logo"
      />
      <FormControlLabel
        control={<Checkbox checked />}
        label="Final PURE DIVILMENT up a little higher"
      />
      <Typography variant="h5" mb={1} mt={3}>
        Home Page
      </Typography>
      <FormControlLabel
        control={<Checkbox checked />}
        label="Fixed position of Baths"
      />
      <FormControlLabel
        control={<Checkbox />}
        label="Home screen video loops"
      />
      <FormControlLabel
        control={<Checkbox checked />}
        label="Now Showing in bigger font size"
      />
      <FormControlLabel
        control={<Checkbox checked />}
        label="Restructure of home screen on mobile"
      />
      <Typography variant="h5" mb={1} mt={3}>
        About Page
      </Typography>
      <FormControlLabel
        control={<Checkbox checked />}
        label="Heading change with italics"
      />
      <Typography variant="h5" mb={1} mt={3}>
        Productions Page
      </Typography>
      <FormControlLabel control={<Checkbox checked />} label="New layout" />
      <FormControlLabel
        control={<Checkbox checked />}
        label="Coming Soon fix"
      />
      <FormControlLabel
        control={<Checkbox checked />}
        label="Current layout clean-up with content fitted to desktop screen"
      />
      <Typography variant="h5" mb={1} mt={3}>
        The Creatives + Profile Pages
      </Typography>
      <FormControlLabel control={<Checkbox checked />} label="Roles updated" />
      <FormControlLabel
        control={<Checkbox checked />}
        label="Enlarged Creatives cards"
      />
      <FormControlLabel
        control={<Checkbox />}
        label="Back button to the Creative page"
      />
      <FormControlLabel
        control={<Checkbox checked />}
        label="Images (headshots) are enlarged"
      />
      <FormControlLabel
        control={<Checkbox checked />}
        label="Content container stretches width of page"
      />
      <FormControlLabel
        control={<Checkbox checked />}
        label="Margin spacing removed from bottom of content container"
      />
      <FormControlLabel
        control={<Checkbox checked />}
        label="Last line of Nell bio deleted"
      />
      <FormControlLabel
        control={<Checkbox checked />}
        label="Accolades added"
      />
      <FormControlLabel
        control={<Checkbox checked />}
        label="Images idea and clean up of spaces between on desktop"
      />
      <FormControlLabel
        control={<Checkbox />}
        label="Nell London agency line to accolades container"
      />
      <Typography variant="h5" mb={1} mt={3}>
        Footer
      </Typography>
      <FormControlLabel
        control={<Checkbox checked />}
        label="Affiliates renders only on home page"
      />
      <FormControlLabel control={<Checkbox checked />} label="Logo in footer" />
      <FormControlLabel
        control={<Checkbox checked />}
        label="Arts Council logo acjusted (might need to tweak the others)"
      />
      <FormControlLabel
        control={<Checkbox checked />}
        label="Footer left-aligned links hover affect"
      />
      <FormControlLabel
        control={<Checkbox checked />}
        label="Spacing and alignment change on footer (space from edge increased)"
      />
      <Typography variant="h5" mb={1} mt={3}>
        Testing
      </Typography>
      <FormControlLabel control={<Checkbox />} label="Cross-device testing" />
      <FormControlLabel control={<Checkbox />} label="Cross-browser testing" />
      <Typography variant="h5" mb={1} mt={3}>
        Analytics
      </Typography>
      <FormControlLabel control={<Checkbox />} label="React GA4" />
    </Container>
  );
};

export default ToDo;
