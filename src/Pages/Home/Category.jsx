import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import s1 from "../../assets/home/slide1.jpg";
import s2 from "../../assets/home/slide2.jpg";
import s3 from "../../assets/home/slide3.jpg";
import s4 from "../../assets/home/slide4.jpg";
import s5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <div>
        <section>
            <SectionTitle heading={"Order Online"}
            subheading={"From 11.00am to 10pm"}>

            </SectionTitle>
        </section>
      <section>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mb-10"
        >
          <SwiperSlide>
            <img src={s1} alt="" />{" "}
            <h3 className="text-center -mt-20 uppercase text-4xl text-white">
              Salad
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={s2} alt="" />{" "}
            <h3 className="text-center -mt-20 uppercase text-4xl text-white">
              Pizza
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={s3} alt="" />{" "}
            <h3 className="text-center -mt-20 uppercase text-4xl text-white">
              Soup
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={s4} alt="" />{" "}
            <h3 className="text-center -mt-20 uppercase text-4xl text-white">
              Dessert
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={s5} alt="" />{" "}
            <h3 className="text-center -mt-16 uppercase text-4xl text-white">
              Salad
            </h3>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Category;
