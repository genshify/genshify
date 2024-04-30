import { useThemeContext } from "../../../contexts/ThemeContext";
import {
  dendroTheme,
  pyroTheme,
  hydroTheme,
  geoTheme,
  electroTheme,
  cryoTheme,
  anemoTheme,
} from "genshin-optimizer/ui";
import { useEffect, useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import tsarista from "./img/cryo-archon.png";
import murata from "./img/pyro-archon.png";
import nahida from "./img/dendro-archon.png";
import raiden from "./img/electro-archon.png";
import furina from "./img/hydro-archon.png";
import venti from "./img/anemo-archon.png";
import zhongli from "./img/geo-archon.png";

const archons = {
  nahida: {
    name: "Nahida",
    region: "Sumeru",
    element: "dendro",
    theme: dendroTheme,
    image: nahida,
  },
  raiden: {
    name: "Raiden Shogun",
    region: "Inazuma",
    element: "electro",
    theme: electroTheme,
    image: raiden,
  },

  venti: {
    name: "Venti",
    region: "Mondstat",
    element: "anemo",
    theme: anemoTheme,
    image: venti,
  },
  murata: {
    name: "Murata",
    region: "Natlan",
    element: "pyro",
    theme: pyroTheme,
    image: murata,
  },
  furina: {
    name: "furina",
    region: "Fontaine",
    element: "hydro",
    theme: hydroTheme,
    image: furina,
  },
  tsarista: {
    name: "Tsarista",
    region: "Snezhnaya",
    element: "cryo",
    theme: cryoTheme,
    image: tsarista,
  },
  zhongli: {
    name: "Zhongli",
    region: "Liyue",
    element: "geo",
    theme: geoTheme,
    image: zhongli,
  },
};

export default function ArchonSlider() {
  const { changeTheme, swiperIndex } = useThemeContext();
  const [realIndex, setRealIndex] = useState(swiperIndex);
  const indexFixer = (index: number) => {
    if (index >= 7) index = 0;
    if (index < 0) index = 6;
    return index;
    //? This function is used to fix the index of the archon when it goes out of bounds (when index is 7, it should be 0, when index is -1, it should be 6)
    //? This is used to make the slider loop
  };
  const [currentSrc, setCurrentSrc] = useState(
    archons[Object.keys(archons)[indexFixer(swiperIndex)]].image
  );

  useEffect(() => {
    setCurrentSrc(archons[Object.keys(archons)[indexFixer(swiperIndex)]].image);
  }, [swiperIndex]);

  const imageSwiper = (index: number) => {
    index = indexFixer(index);
    setRealIndex(index);
    changeTheme(archons[Object.keys(archons)[index]].theme, index);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexFlow: "column",
        maxWidth: { xs: "200px", sm: "300px", md: "400px" },
        maxHeight: { xs: "300px", sm: "400px", md: "500px" },
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "space-between",
          marginBottom: "1rem",
          Button: {
            width: "50%",
          },
        }}
      >
        <Button
          sx={{
            ":hover": {
              bgcolor: `${
                archons[Object.keys(archons)[indexFixer(realIndex - 1)]].element
              }.main`,
            },
          }}
          onClick={() => {
            imageSwiper(realIndex - 1);
          }}
        >
          {archons[Object.keys(archons)[indexFixer(realIndex - 1)]].region}
        </Button>
        <Button
          sx={{
            ":hover": {
              bgcolor: `${
                archons[Object.keys(archons)[indexFixer(realIndex + 1)]].element
              }.main`,
            },
          }}
          onClick={() => {
            imageSwiper(realIndex + 1);
          }}
        >
          {archons[Object.keys(archons)[indexFixer(realIndex + 1)]].region}
        </Button>
      </Stack>
      <img src={currentSrc} className="home-img" alt="Character Image" />
    </Box>
  );
}
