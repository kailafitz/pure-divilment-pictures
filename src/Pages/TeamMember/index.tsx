import React from "react";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import { TeamData } from "../../Data/TeamData";
import TeamMemberContent from "../../Components/TeamMemberContentLayout";

const TeamMemberProfile = () => {
  const id = useParams<{ id: string }>();

  const SelectedTeamMember = TeamData.filter((member) => {
    return member.teamMember.id === id.id;
  });

  return (
    <Box mb={{ sm: 5 }}>
      {SelectedTeamMember.map((member, i) => {
        return <TeamMemberContent key={i} TeamMember={member.teamMember} />;
      })}
    </Box>
  );
};

export default TeamMemberProfile;
