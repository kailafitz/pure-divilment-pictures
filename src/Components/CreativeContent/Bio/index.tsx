import { Typography } from "@mui/material";
import { BioTypography } from "./styles";

type BioProps = {
  name: string;
  role: string;
  bio: string[];
};

export const Bio = (props: BioProps) => {
  return (
    <>
      <Typography variant="h4">{props.name}</Typography>
      <Typography>{props.role}</Typography>
      <br />
      {props.bio.map((paragraph, i) => {
        return <BioTypography key={i}>{paragraph}</BioTypography>;
      })}
    </>
  );
};
