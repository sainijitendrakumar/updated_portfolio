import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Reviews() {
  return (
    <section class="max-w-screen-xl mx-auto pb-12">
      <h2 class="text-3xl sm:text-[40px] bg-[#111] sm:w-max relative z-10 font-bold px-4 py-2 mx-auto text-center text-[#1788ae] sm:border-2 border-[#1788ae] rounded-md">
        What my clients are saying?
      </h2>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div class="swiper-slide px-4 !flex justify-center item-center">
            <div class="flex flex-col md:flex-row w-full md:max-w-[800px] items-center rounded-lg p-9 shadow-[0_0px_50px_rgba(59,130,246,0.6)] cursor-grab">
              <img
                class="shrink-0 w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full drop-shadow-[0_0px_80px_rgba(59,130,246,1)]"
                src="src/assets/images/saatvik.webp"
                alt="testimonial 3"
              />
              <div class="testimonial-text ml-6 text-left pt-6 md:pt-16 relative">
                <p class="text-sm md:text-base mb-2">
                  “Anurag is a talented, committed individual who will leave no
                  stone unturned in his pursuit to provide with the best. His
                  attention to detail and in-depth experience in the of web
                  development is indeed commendable. He has exhibited exemplary
                  skills in the field, and I hope to see all the great projects
                  coming up!”
                </p>
                <h2 class="text-right text-[#459bd5] font-bold text-2xl md:text-4xl">
                  Saatvik Nagpal
                </h2>
                <h5 class="text-right text-[#459bd5] text-base md:text-lg">
                  Founder, EazyGrad
                </h5>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="swiper-slide px-4 !flex justify-center item-center">
            <div class="flex flex-col md:flex-row max-w-[800px] items-center rounded-lg p-9 shadow-[0_0px_50px_rgba(59,130,246,0.6)] cursor-grab">
              <img
                class="shrink-0 w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full drop-shadow-[0_0px_80px_rgba(59,130,246,1)]"
                src="src/assets/images/kira.webp"
                alt="testimonial 3"
              />
              <div class="testimonial-text ml-6 text-left pt-6 md:pt-16 relative">
                <p class="text-sm md:text-base mb-2">
                  “Anurag was a wonderful developer to work with! He anticipated
                  everything I need to consider for my website. He also went the
                  extra mile and added details that I hadn't considered! He is
                  helping my business grow, and I will definitely work with him
                  again!”
                </p>
                <h2 class="text-right text-[#459bd5] font-bold text-2xl md:text-4xl">
                  Kira Bragg
                </h2>
                <h5 class="text-right text-[#459bd5] text-base md:text-lg">
                  English Mentor
                </h5>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="swiper-slide px-4 !flex justify-center item-center">
            <div class="flex flex-col md:flex-row max-w-[800px] items-center rounded-lg p-9 shadow-[0_0px_50px_rgba(59,130,246,0.6)] cursor-grab">
              <img
                class="shrink-0 w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full drop-shadow-[0_0px_80px_rgba(59,130,246,1)]"
                src="src/assets/images/Srihari.webp"
                alt="testimonial 3"
              />
              <div class="testimonial-text ml-6 text-left pt-6 md:pt-16 relative">
                <p class="text-sm md:text-base mb-2">
                  “I worked with Anurag to make my website. I am speechless by
                  looking at his work ethic and dedication. Working with him was
                  the best decision I made.”
                </p>
                <h2 class="text-right text-[#459bd5] font-bold text-2xl md:text-4xl">
                  Srihari Kestur
                </h2>
                <h5 class="text-right text-[#459bd5] text-base md:text-lg">
                  Founder Harigurus
                </h5>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* <div class="swiper mySwiper !py-14">
        <div class="swiper-wrapper items-center">
          <div class="swiper-slide px-4">
            <div class="flex flex-col md:flex-row w-full md:max-w-[800px] items-center rounded-lg p-9 shadow-[0_0px_50px_rgba(59,130,246,0.6)] cursor-grab">
              <img
                class="shrink-0 w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full drop-shadow-[0_0px_80px_rgba(59,130,246,1)]"
                src="src/assets/images/saatvik.webp"
                alt="testimonial 3"
              />
              <div class="testimonial-text ml-6 text-left pt-6 md:pt-16 relative">
                <p class="text-sm md:text-base mb-2">
                  “Anurag is a talented, committed individual who will leave no
                  stone unturned in his pursuit to provide with the best. His
                  attention to detail and in-depth experience in the of web
                  development is indeed commendable. He has exhibited exemplary
                  skills in the field, and I hope to see all the great projects
                  coming up!”
                </p>
                <h2 class="text-right text-[#459bd5] font-bold text-2xl md:text-4xl">
                  Saatvik Nagpal
                </h2>
                <h5 class="text-right text-[#459bd5] text-base md:text-lg">
                  Founder, EazyGrad
                </h5>
              </div>
            </div>
          </div>
          <div class="swiper-slide px-4">
            <div class="flex flex-col md:flex-row max-w-[800px] items-center rounded-lg p-9 shadow-[0_0px_50px_rgba(59,130,246,0.6)] cursor-grab">
              <img
                class="shrink-0 w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full drop-shadow-[0_0px_80px_rgba(59,130,246,1)]"
                src="src/assets/images/kira.webp"
                alt="testimonial 3"
              />
              <div class="testimonial-text ml-6 text-left pt-6 md:pt-16 relative">
                <p class="text-sm md:text-base mb-2">
                  “Anurag was a wonderful developer to work with! He anticipated
                  everything I need to consider for my website. He also went the
                  extra mile and added details that I hadn't considered! He is
                  helping my business grow, and I will definitely work with him
                  again!”
                </p>
                <h2 class="text-right text-[#459bd5] font-bold text-2xl md:text-4xl">
                  Kira Bragg
                </h2>
                <h5 class="text-right text-[#459bd5] text-base md:text-lg">
                  English Mentor
                </h5>
              </div>
            </div>
          </div>
          <div class="swiper-slide px-4">
            <div class="flex flex-col md:flex-row max-w-[800px] items-center rounded-lg p-9 shadow-[0_0px_50px_rgba(59,130,246,0.6)] cursor-grab">
              <img
                class="shrink-0 w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full drop-shadow-[0_0px_80px_rgba(59,130,246,1)]"
                src="src/assets/images/Srihari.webp"
                alt="testimonial 3"
              />
              <div class="testimonial-text ml-6 text-left pt-6 md:pt-16 relative">
                <p class="text-sm md:text-base mb-2">
                  “I worked with Anurag to make my website. I am speechless by
                  looking at his work ethic and dedication. Working with him was
                  the best decision I made.”
                </p>
                <h2 class="text-right text-[#459bd5] font-bold text-2xl md:text-4xl">
                  Srihari Kestur
                </h2>
                <h5 class="text-right text-[#459bd5] text-base md:text-lg">
                  Founder Harigurus
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
      </div> */}
    </section>
  );
}

export default Reviews;
