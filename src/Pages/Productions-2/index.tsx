import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ProductionData } from "../../Data/ProductionData";
import { ProductionsReelContainer, ReelItem } from "./styles";
import ProductionProfile from "../ProductionProfile";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  style: Object;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  // const [visible, setVisible] = React.useState(false);
  const [visible, setVisible] = React.useState<{ bool: Boolean }>({
    bool: false,
  });

  console.log(visible);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setVisible({ bool: true });
  };

  return (
    <ProductionsReelContainer>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Productions Tab"
        TabIndicatorProps={{
          sx: {
            display: "none",
          },
        }}
        sx={{
          transform: "skewY(4deg)",
          marginTop: (theme) => theme.spacing(10),
          bgcolor: (theme) => theme.palette.white.main,
          ".MuiTabs-flexContainer": {
            display: "grid",
            gridTemplateColumns: { md: "1fr 1fr 1fr 1fr" },
            columnGap: 0.5,
          },
        }}
      >
        {ProductionData.map((prod, index) => {
          return (
            <ReelItem
              key={index}
              label={prod.production.logo}
              onMouseOver={() => setVisible({ bool: true })}
              onMouseOut={() => setVisible({ bool: false })}
              {...a11yProps(index)}
            />
          );
        })}
      </Tabs>
      {ProductionData.map((prod, index) => {
        const id = (value + 1).toString();
        return (
          <CustomTabPanel
            key={index}
            value={value}
            index={index}
            style={{
              width: "100%",
              flexDirection: "column",
              marginTop:
                prod.production.status === "In Development" ? 0 : "-80px",
              // background: "grey",
              display: index === value ? "flex" : "none",
              flexGrow: 1,
            }}
          >
            {prod.production.status === "In Development" ? (
              <Box
                sx={{
                  display: "flex",
                  flexGrow: 1,
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h6" textAlign="center">
                  Coming Soon
                </Typography>
              </Box>
            ) : (
              <>
                {visible && (
                  <Box
                    sx={{
                      flexGrow: 1,
                      width: "100%",
                      minHeight: "100vh",
                      background: `url(${prod.production.coverImage}) no-repeat`,
                    }}
                  ></Box>
                )}

                {index === value && <ProductionProfile id={id} />}
                {/* {visible && <ProductionProfile id={id} />} */}
              </>
            )}
          </CustomTabPanel>
        );
      })}
    </ProductionsReelContainer>
  );
}
