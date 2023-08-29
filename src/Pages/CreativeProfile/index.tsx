import React from "react";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import { CreativesData } from "../../Data/CreativesData";
import CreativeContent from "../../Components/CreativeContent";

const CreativeProfile = () => {
  const id = useParams<{ id: string }>();

  const SelectedCreative = CreativesData.filter((member) => {
    return member.creative.id === id.id;
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      {SelectedCreative.map((member, i) => {
        return <CreativeContent key={i} Creative={member.creative} />;
      })}
    </Box>
  );
};

export default CreativeProfile;
