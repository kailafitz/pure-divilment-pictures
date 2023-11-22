import { HomeTitleContainer } from "./styles";
import { Typography } from "@mui/material";
import LinkButton from "../../LinkButton";

type textProps = {
  logo: JSX.Element;
  text?: string;
  id: string;
  isActive: boolean;
};

const SlideText = (props: textProps) => {
  return (
    <HomeTitleContainer
      sx={{
        animation: props.isActive ? "text-in 13s linear 1s 1 forwards" : "none",
        color: (theme) => theme.palette.white.main,
        svg: {
          maxWidth: "70%",
          margin: (theme) => theme.spacing(0, "auto", 5, "auto"),
        },
      }}
    >
      {props.logo}
      <Typography
        color="common.white"
        variant="h5"
        sx={{
          textTransform: "uppercase",
          fontWeight: 700,
          mb: 2.5,
          letterSpacing: "2px",
        }}
      >
        {props.text}
      </Typography>
      <LinkButton
        label="Find out more"
        path={`/productions/${props.id}`}
        color="white"
        styles={{ width: "fit-content", m: "0 auto", borderRadius: 0 }}
      />
    </HomeTitleContainer>
  );
};

export default SlideText;
