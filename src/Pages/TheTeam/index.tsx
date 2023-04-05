import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { TeamData } from "../../Data/TeamData";
import TeamMemberCard from "../../Components/TeamMemberCard";

const TheTeam = () => {
  return (
    <Grid
      container
      spacing={7}
      sx={{
        display: "flex",
        flexGrow: 1,
        justifyContent: "center",
        width: "80%",
        margin: (theme) => theme.spacing(0, "auto", 3, "auto"),
      }}
    >
      {TeamData.map((member) => {
        return (
          <Grid
            xs={12}
            md={4}
            sx={{ pb: { xs: 3, sm: 0 } }}
            key={member.teamMember.id}
          >
            <TeamMemberCard TeamMember={member.teamMember} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default TheTeam;
