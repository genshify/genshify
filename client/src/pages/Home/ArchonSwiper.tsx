import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useThemeContext } from "../../contexts/ThemeContext";
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
import { Button } from "@mui/material";
const archons = {
  nahida: {
    name: "Nahida",
    element: "Dendro",
    theme: dendroTheme,
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5e5896a5-4a79-496a-bea4-81f26cfa2650/dfk0ut3-fb4e6ebd-5c41-41e5-98c1-35cdb0ab8d53.png/v1/fill/w_786,h_1016/nahida_genshin_impact_character_render_by_deg5270_dfk0ut3-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTY1NCIsInBhdGgiOiJcL2ZcLzVlNTg5NmE1LTRhNzktNDk2YS1iZWE0LTgxZjI2Y2ZhMjY1MFwvZGZrMHV0My1mYjRlNmViZC01YzQxLTQxZTUtOThjMS0zNWNkYjBhYjhkNTMucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.AtqnmnR4uN1v657CtgthGOEuuQ0fVP91ZD4OYTyMKUw",
  },
  raiden: {
    name: "Raiden Shogun",
    element: "Electro",
    theme: electroTheme,
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5e5896a5-4a79-496a-bea4-81f26cfa2650/deqwe2o-ee69d7a5-f766-4868-b426-83a1e8082856.png/v1/fill/w_787,h_1015/shogun_raiden_genshin_impact_character_render_by_deg5270_deqwe2o-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTY1MSIsInBhdGgiOiJcL2ZcLzVlNTg5NmE1LTRhNzktNDk2YS1iZWE0LTgxZjI2Y2ZhMjY1MFwvZGVxd2Uyby1lZTY5ZDdhNS1mNzY2LTQ4NjgtYjQyNi04M2ExZTgwODI4NTYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Y_j5MMzLiw-G7zs39l1UuArESK3741U4ufQQlfgB_uw",
  },

  venti: {
    name: "Venti",
    element: "Anemo",
    theme: anemoTheme,
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/37d1e25f-6ff6-4deb-8dc6-a67cf25efc98/dfb4y91-df8b5e99-ee2c-46ca-ba0f-08119feb1ee2.png/v1/fit/w_828,h_794/_genshin_impact__venti_full_render__gacha_art__by_nagarachireal_dfb4y91-414w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzkxOCIsInBhdGgiOiJcL2ZcLzM3ZDFlMjVmLTZmZjYtNGRlYi04ZGM2LWE2N2NmMjVlZmM5OFwvZGZiNHk5MS1kZjhiNWU5OS1lZTJjLTQ2Y2EtYmEwZi0wODExOWZlYjFlZTIucG5nIiwid2lkdGgiOiI8PTQwODMifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.6pIdI04kFff2JL4M8GOKbwouTzHZnKRhEXj9o6w1csc",
  },
  murata: {
    name: "Murata",
    element: "Pyro",
    theme: pyroTheme,
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5e5896a5-4a79-496a-bea4-81f26cfa2650/de910uj-8079f636-0d62-46b5-90eb-f9d7083ac175.png/v1/fit/w_750,h_1404/bennett_genshin_impact_character_render_by_deg5270_de910uj-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjM5NSIsInBhdGgiOiJcL2ZcLzVlNTg5NmE1LTRhNzktNDk2YS1iZWE0LTgxZjI2Y2ZhMjY1MFwvZGU5MTB1ai04MDc5ZjYzNi0wZDYyLTQ2YjUtOTBlYi1mOWQ3MDgzYWMxNzUucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.9yNh9DkVneXQrMwJIDCyIgZXHc9F7m6HuLbCOvBI9P0",
  },
  furina: {
    name: "furina",
    element: "Hydro",
    theme: hydroTheme,
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4c61658e-d4be-4618-b1fa-e9594b9b6908/dgett44-15111d84-b2f7-4f36-8c03-ff9fceda0d2c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRjNjE2NThlLWQ0YmUtNDYxOC1iMWZhLWU5NTk0YjliNjkwOFwvZGdldHQ0NC0xNTExMWQ4NC1iMmY3LTRmMzYtOGMwMy1mZjlmY2VkYTBkMmMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JUBq34wdfl1XogZdQ4xEvm3fECJAdUsUkcgkY5GLozk",
  },
  tsarista: {
    name: "Tsarista",
    element: "Cryo",
    theme: cryoTheme,
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5e5896a5-4a79-496a-bea4-81f26cfa2650/de911hw-e03015c9-8ded-4121-ae94-9eeeec418882.png/v1/fit/w_750,h_1204/qiqi_genshin_impact_character_render_by_deg5270_de911hw-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzQyOCIsInBhdGgiOiJcL2ZcLzVlNTg5NmE1LTRhNzktNDk2YS1iZWE0LTgxZjI2Y2ZhMjY1MFwvZGU5MTFody1lMDMwMTVjOS04ZGVkLTQxMjEtYWU5NC05ZWVlZWM0MTg4ODIucG5nIiwid2lkdGgiOiI8PTIxMzYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Wvp6mXsLOUAVe_IbDCPtKjyyimuCb-_dD91DgJk6o5g",
  },
  zhongli: {
    name: "Zhongli",
    element: "Geo",
    theme: geoTheme,
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5e5896a5-4a79-496a-bea4-81f26cfa2650/deeqrmg-2f0ccbc4-b403-43d2-b105-d62ca5a3fc94.png/v1/fit/w_828,h_964/zhongli_genshin_impact_character_render_by_deg5270_deeqrmg-414w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ5MCIsInBhdGgiOiJcL2ZcLzVlNTg5NmE1LTRhNzktNDk2YS1iZWE0LTgxZjI2Y2ZhMjY1MFwvZGVlcXJtZy0yZjBjY2JjNC1iNDAzLTQzZDItYjEwNS1kNjJjYTVhM2ZjOTQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.rdRHGbC_oRjnpMnNxbcQMhqK-QjoDaf2zfqoTHsIbPI",
  },
};

export default function ArchonSlider() {
const { changeTheme, swiperIndex } = useThemeContext();
const [realIndex,setRealIndex]=useState(swiperIndex)

const indexFixer=(index:number)=>{
  if(index>=7) index=0
  if(index<0) index=6
  return index
  //? This function is used to fix the index of the archon when it goes out of bounds (when index is 7, it should be 0, when index is -1, it should be 6)
  //? This is used to make the slider loop
}
const [currentSrc,setCurrentSrc]=useState(archons[Object.keys(archons)[indexFixer(swiperIndex)]].image)

useEffect(() => {
  setCurrentSrc(archons[Object.keys(archons)[indexFixer(swiperIndex)]].image);
}, [swiperIndex]);

  const imageSwiper=(index:number)=>{
    index=indexFixer(index)
    setRealIndex(index)
    changeTheme(archons[Object.keys(archons)[index]].theme, index)
  }
  return (
    <div className="slider-container">
      <img src={currentSrc} className="home-img" alt="Character Image" />
      <span style={{
        display:"flex",
        justifyContent:"space-around",
      }}>
      <Button onClick={()=>{imageSwiper(realIndex-1)}}>{archons[Object.keys(archons)[indexFixer(realIndex-1)]].name}</Button>
      <Button onClick={()=>{imageSwiper(realIndex+1)}}>{archons[Object.keys(archons)[indexFixer(realIndex+1)]].name}</Button>
      </span>
    </div>
  );
}
