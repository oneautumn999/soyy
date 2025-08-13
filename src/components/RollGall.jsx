import { useTheme } from "./styling/ThemeContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const RollingGallery = ({
  images = [],
  themeBgClass = "",
  autoplay = true,
  pauseOnHover = true,
}) => {
  const { themeColors } = useTheme();

  return (
    <div
      className={`flex items-center justify-center h-full w-full rounded-xl overflow-hidden ${themeBgClass}`}
    >
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={
          autoplay
            ? {
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: pauseOnHover,
              }
            : false
        }
        allowTouchMove={true}
        className="h-full"
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {images.map((img, i) => (
          <SwiperSlide
            key={i}
            className="flex items-center justify-center h-[55vh] min-h-[300px]"
          >
            <div
              className={`rounded-xl overflow-hidden w-full h-full flex items-center justify-center ${themeColors.shadowBox}`}
            >
              <img
                src={img.Image}
                alt={img.Alt}
                className="object-cover rounded-xl border-4 w-full max-w-[90%] max-h-[36vh] mx-auto"
                style={{
                  background: "inherit",
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RollingGallery;