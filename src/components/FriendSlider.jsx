"use client";
import { useTheme } from "../components/styling/ThemeContext"; // Update import path if needed
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

function FriendSlider({ friends }) {
  const { themeColors } = useTheme();

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 1 },
        1024: { slidesPerView: 1 },
      }}
      className="w-full max-w-full"
    >
      {friends.map((friend, index) => (
        <SwiperSlide key={index}>
          <div
            className={`flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl border 
              ${themeColors.backgroundSecondary} ${themeColors.border}`}
          >
            <img
              src={friend.Image}
              alt={friend.Nama}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border border-neutral-500"
            />
            <div className="text-center sm:text-left">
              <p className={`font-semibold text-lg ${themeColors.text}`}>{friend.Nama}</p>
              <p className={`text-sm italic ${themeColors.textLight}`}>
                {friend.TheySaid}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default FriendSlider;