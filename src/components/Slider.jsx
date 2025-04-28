// Slider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import du style de base de Swiper

export default function Slider() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('Slide changé')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src="/slide1.jpg" alt="Slide 1" /></SwiperSlide>
      <SwiperSlide><img src="/slide2.jpg" alt="Slide 2" /></SwiperSlide>
      <SwiperSlide><img src="/slide3.jpg" alt="Slide 3" /></SwiperSlide>
    </Swiper>
  );
}
