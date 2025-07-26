import React, { useState, useCallback } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Pagination } from 'swiper/modules'
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { IoIosArrowDropright, IoIosArrowDropleft } from 'react-icons/io'
import './HomeSwiper.css'

const HomeSwiper = ({ image1, image2, image3 }) => {
  const [swiperRef, setSwiperRef] = useState(null)

  // Avoid inline functions on every render
  const handlePrev = useCallback(() => swiperRef?.slidePrev(), [swiperRef])
  const handleNext = useCallback(() => swiperRef?.slideNext(), [swiperRef])

  return (
    <div className="flex flex-col w-full">
      <div className="relative z-20">
        <Swiper
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination, Navigation]}
          onSwiper={setSwiperRef}
          breakpoints={{
            1024: {
              slidesPerView: 1,
            },
          }}
        >
          {[image1, image2, image3].map((src, index) => (
            <SwiperSlide key={index}>
              <div className="h-[40vh] md:h-[50vh] lg:h-[70vh] w-full">
                <img
                  src={src}
                  alt={`bannerImage-${index}`}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="h-full w-full " 
                  width="1920"
                  height="1080"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <div className="flex w-full justify-between px-7 absolute translate-y-[-10vh] z-20">
          <button onClick={handlePrev} aria-label="Previous slide">
            <IoIosArrowDropleft fill="white" size={35} className="cursor-pointer" />
          </button>
          <button onClick={handleNext} aria-label="Next slide">
            <IoIosArrowDropright fill="white" size={35} className="cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomeSwiper
