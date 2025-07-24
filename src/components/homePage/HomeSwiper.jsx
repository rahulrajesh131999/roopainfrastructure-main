import React, { useState } from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import {Autoplay,FreeMode,Navigation, Pagination}  from 'swiper/modules'
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination";
import { IoIosArrowDropright, IoIosArrowDropleft } from 'react-icons/io'
import './HomeSwiper.css'



const HomeSwiper = ({image1,image2,image3}) => {

  const [nextswiper,setNextSwiper]=useState(null)
    
  return (
    <div className='flex flex-col w-full'>
      <div className='relative z-20'>
        <Swiper
        slidesPerView={1}

        loop={true}
        autoplay={false}
        pagination={{clickable:true}}
        modules={[FreeMode,Pagination,Autoplay,Navigation]}
        onSwiper={(swiper)=>setNextSwiper(swiper)}
          breakpoints={{
            1024: {
              slidesPerView: 1,
            },
          }}
        >
          <SwiperSlide>
            <div className='h-[40vh] md:h-[50vh]  lg:h-[70vh] w-full'>
              {<img src={image1} alt='' className='h-full w-full object-fill'/>}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-[40vh] md:h-[50vh] lg:h-[70vh] w-full'>
              {<img src={image2} alt='' className='h-full w-full object-fill'/>}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-[40vh] md:h-[50vh] lg:h-[70vh] w-full'>
              {<img src={image3} alt='' className='h-full w-full object-fill'/>}
            </div>
          </SwiperSlide>
        </Swiper>
        <div className='flex w-full justify-between px-7 absolute translate-y-[-10vh] z-20'>
          <button onClick={() => nextswiper?.slidePrev()} >
            <IoIosArrowDropleft fill='white' size={35} className='cursor-pointer'/>
          </button>
          <button onClick={() => nextswiper?.slideNext()}>
            <IoIosArrowDropright fill='white' size={35} className='cursor-pointer'/>
          </button>
        </div>
    </div>
    </div>
  )
}

export default HomeSwiper