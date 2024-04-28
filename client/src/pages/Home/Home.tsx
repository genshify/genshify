import ArchonSlider from "./ArchonSwiper";
import Regions from "./Regions/Regions";
import { useThemeContext } from "../../contexts/ThemeContext";

import { Box, Typography } from "@mui/material";
export default function Home() {
  const { swiperIndex } = useThemeContext();
  const region = [
    "Sumeru",
    "Inazuma",
    "Mondstat",
    "Natlan",
    "Fontain",
    "Snehzhnaya",
    "Liyue",
  ];
  return (
    <Box>
      <Typography variant="h5">Explore Genshin Impact regions: {region[swiperIndex]}</Typography>
      <Box display={"flex"}>
        <Regions />
        <ArchonSlider />
      </Box>
    </Box>
  );
}
