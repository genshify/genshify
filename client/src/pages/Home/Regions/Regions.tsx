import mondstatData from "./mondstat.json";
import liyueData from "./liyue.json";
import inazumaData from "./inazuma.json";
import sumeruData from "./sumeru.json";
import fontaineData from "./fontaine.json";
import natlanData from "./natlan.json";
import snezhnayaData from "./snezhnaya.json";
import khaenriahData from "./khaenriah.json";
import { Box, Typography } from "@mui/material";
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
    <Box>
      <Typography variant="h3">
        The 
      </Typography>
       <Typography variant="h3" sx={{
        color:"primary.dark"
       }}> {regionArray[swiperIndex].heading}</Typography>
      <Typography >{regionArray[swiperIndex].description}</Typography>
      <a href="#" className="button button-flex">
        Take a Tour
        <i className="ri-arrow-right-line button-icon"></i>
      </a>
    </Box>
  );
}
