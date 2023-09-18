import React from "react";
import { ProductionItemInterface } from "../../../Data/ProductionData";
import { ProductionImage } from "./styles";

const Poster = (props: ProductionItemInterface) => {
  return (
    <ProductionImage
      src={props.Production.poster}
      alt="production poster"
      sx={{ mb: { xs: 6, lg: 10 } }}
    />
  );
};

export default Poster;
