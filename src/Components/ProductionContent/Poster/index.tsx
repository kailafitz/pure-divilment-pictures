import React from "react";
import { ProductionItemInterface } from "../../../Data/ProductionData";
import { ProductionImage } from "./styles";

const Poster = (props: ProductionItemInterface) => {
  return (
    <picture>
      <source
        srcSet={`/productions/${props.Production.fileHandle}/poster.webp`}
      ></source>
      <ProductionImage
        src={`/productions/${props.Production.fileHandle}/poster.png`}
        alt="production poster"
        sx={{ mb: { xs: 6, lg: 10 } }}
      />
    </picture>
  );
};

export default Poster;
