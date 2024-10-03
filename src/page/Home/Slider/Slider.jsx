import React from 'react';
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const Slider = () => {
    const [sliderRef] = useKeenSlider({
      slides: {
        perView: 4,
        spacing: 15,
      },
    });
    return (
      <div>
        <div>
          <SectionTitle heading="Our Brand" subHeading="---popular Brand---"></SectionTitle>
        </div>
        <div ref={sliderRef} className="keen-slider py-5 text-center">
          <div className="keen-slider__slide number-slide2">
            <img
              src="https://images.pexels.com/photos/11237834/pexels-photo-11237834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <p>Apple</p>
          </div>
          <div className="keen-slider__slide number-slide1">
            <img
              src="https://images.pexels.com/photos/11129922/pexels-photo-11129922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <p>Hp</p>
          </div>
          <div className="keen-slider__slide number-slide3">
            <img
              src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <p>Lenovo</p>
          </div>
          <div className="keen-slider__slide number-slide4">
            <img
              src="https://images.pexels.com/photos/6598/coffee-desk-laptop-notebook.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <p>Dell</p>
          </div>
          <div className="keen-slider__slide number-slide5">
            <img
              src="https://images.pexels.com/photos/18104/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <p>Acer</p>
          </div>
          <div className="keen-slider__slide number-slide6">
            <img
              src="https://images.pexels.com/photos/7836576/pexels-photo-7836576.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <p>Asus</p>
          </div>
          <div className="keen-slider__slide number-slide6">
            <img
              src="https://cdn.pixabay.com/photo/2022/11/03/15/24/coffee-7567749_960_720.jpg"
              alt=""
            />
            <p>Walton</p>
          </div>
        </div>
      </div>
    );
};

export default Slider;