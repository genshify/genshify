import mondstatData from "./mondstat.json";
import liyueData from "./liyue.json";
import inazumaData from "./inazuma.json";
import sumeruData from "./sumeru.json";
import fontaineData from "./fontaine.json";
import natlanData from "./natlan.json";
import snezhnayaData from "./snezhnaya.json";
import khaenriahData from "./khaenriah.json";
import { Box, Link, Typography } from "@mui/material";
import { useThemeContext } from "../../../contexts/ThemeContext";
export default function Regions() {
  const { swiperIndex } = useThemeContext();
  const regionArray = [
    sumeruData,
    inazumaData,
    mondstatData,
    natlanData,
    fontaineData,
    snezhnayaData,
    liyueData,
    khaenriahData,
  ];
  return (
    <Box sx={{
      display:"flex",
      flexFlow:"column"
    }}>
      <Typography variant="h3" fontSize={{ xs: "1.5rem", sm: "2rem",md:"3rem" }} >
        The 
      </Typography>
       <Typography variant="h3" fontSize={{ xs: "1.5rem", sm: "2rem",md:"3rem" }} sx={{
        color:"primary.dark"
       }}>{regionArray[swiperIndex].heading}</Typography>
      <Typography >{regionArray[swiperIndex].description}</Typography>
      <Link color={"primary.dark"} href="#" className="button button-flex">
        Take a Tour
      </Link>
    </Box>
  );
}
