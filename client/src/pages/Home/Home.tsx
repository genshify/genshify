import { useThemeContext } from "../../contexts/ThemeContext";
import ArchonSlider from "./ArchonSwiper";
import "./home.css";
import mondstatData from "./regionData/mondstat.json"
import liyueData from "./regionData/liyue.json"
import inazumaData from "./regionData/inazuma.json"
import sumeruData from "./regionData/sumeru.json"
import fontaineData from "./regionData/fontaine.json"
import natlanData from "./regionData/natlan.json"
import snezhnayaData from "./regionData/snezhnaya.json"
import khaenriahData from "./regionData/khaenriah.json"
export default function Home() {
  const {swiperIndex} = useThemeContext();
  const regionArray = [sumeruData,inazumaData,mondstatData,natlanData,fontaineData,snezhnayaData,liyueData,khaenriahData]
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-data">
          <h1 className="home-title">
            The <br />
            {regionArray[swiperIndex].heading}
          </h1>
          <p className="home-description">
            {regionArray[swiperIndex].description}
          </p>
          <a href="#" className="button button-flex">
            Take a Tour
            <i className="ri-arrow-right-line button-icon"></i>
          </a>
        </div>
        <div className="swiper-container">
         <ArchonSlider/>
        </div>
      </div>
    </div>
  );
}
