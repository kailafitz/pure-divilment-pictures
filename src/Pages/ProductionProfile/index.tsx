import React from "react";
import { ProductionData } from "../../Data/ProductionData";
import { Box } from "@mui/material";
import ProductionContent from "../../Components/ProductionContent";

type Props = {
  id: String;
};

const ProductionProfile = (props: Props) => {
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
