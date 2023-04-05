import React from "react";
import { useParams } from "react-router-dom";
import { ProductionData } from "../../Data/ProductionData";
import { Box } from "@mui/material";
import ProductionContentLayout from "../../Components/ProductionContentLayout";

const ProductionProfile = () => {
  const id = useParams<{ id: string }>();

  const SelectedProduction = ProductionData.filter((production) => {
    return production.production.id === id.id;
  });

  return (
    <Box>
      {SelectedProduction.map((production) => {
        return (
          <ProductionContentLayout
            key={production.production.id}
            Production={production.production}
          />
        );
      })}
    </Box>
  );
};

export default ProductionProfile;
