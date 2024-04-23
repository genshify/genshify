import ArchonSlider from "./ArchonSwiper";
import "./home.css";
export default function home() {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-data">
          <h1 className="home-title">
            The <br />
            Land of Wisdom
          </h1>
          <p className="home-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
            itaque, tempora fugit adipisci quo animi.
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
