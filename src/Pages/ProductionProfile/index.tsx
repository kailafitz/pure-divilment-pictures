import React from "react";
import { ProductionData } from "../../Data/ProductionData";
import { Box } from "@mui/material";
import ProductionContent from "../../Components/ProductionContent";

type ProductionProfileProps = {
  id: String;
};

const ProductionProfile = (props: ProductionProfileProps) => {
  const SelectedProduction = ProductionData.filter((production) => {
    return production.production.id === props.id;
  });

  return (
    <>
      <Box>
        {SelectedProduction.map((production) => {
          return (
            <ProductionContent
              key={production.production.id}
              Production={production.production}
            />
          );
        })}
      </Box>
    </>
  );
};

export default ProductionProfile;
