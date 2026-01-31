import React from "react";
import Title from "./Title";
import { testimonialsItems } from "../constant/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";

const Testimonials = () => {
  return (
    <section className="p-5">
      <Title
        title="Our Testimonials"
        text="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
        link="View All"
      />

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1.5,
          },
          1280: {
            slidesPerView: 2.5,
          },
        }}
      >
        {testimonialsItems.map((item) => (
          <SwiperSlide className="bg-white p-10 rounded-md border border-amber-100">
            <p>{item.text}</p>
            <div className="flex items-center justify-between mt-5 border-t-orange-300">
              <div className="flex items-center gap-3">
                <div>
                  <img
                    src={item.img}
                    alt={item.author}
                    width={50}
                    height={50}
                  />
                </div>
                <p className="font-medium">{item.author}</p>
              </div>
              <button className="p-4 bg-gray-100 rounded-md hover:bg-amber-300">
                Read Full Story
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
