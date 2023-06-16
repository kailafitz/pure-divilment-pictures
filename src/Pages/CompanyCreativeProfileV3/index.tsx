import React from "react";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import { CreativesData } from "../../Data/TeamData";
import CompanyCreativeProfileContent from "../../Components/CompanyCreativeProfileContent";

const CompanyCreativeProfile = () => {
  const id = useParams<{ id: string }>();

  const SelectedCreative = CreativesData.filter((member) => {
    return member.creative.id === id.id;
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      {SelectedCreative.map((member, i) => {
        return (
          <CompanyCreativeProfileContent key={i} Creative={member.creative} />
        );
      })}
    </Box>
  );
};

export default CompanyCreativeProfile;