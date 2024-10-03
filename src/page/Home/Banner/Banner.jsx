import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src="https://cdn.pixabay.com/photo/2023/04/28/11/22/laptop-7956356_1280.jpg" />
      </div>
      <div>
        <img src="https://cdn.pixabay.com/photo/2015/12/15/03/56/macbook-1093641_1280.jpg" />
      </div>
      <div>
        <img src="https://cdn.pixabay.com/photo/2016/11/23/13/40/iphone-1852901_1280.jpg" />
      </div>
      <div>
        <img src="https://cdn.pixabay.com/photo/2016/11/29/06/18/home-office-1867759_960_720.jpg" />
      </div>
      <div>
        <img src="https://cdn.pixabay.com/photo/2016/10/11/09/26/office-1730939_960_720.jpg" />
      </div>
      <div>
        <img src="https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_960_720.jpg" />
      </div>
    </Carousel>
  );
};

export default Banner;
