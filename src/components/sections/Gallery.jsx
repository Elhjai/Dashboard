import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { MessageCircle } from "lucide-react";

const GalleryItem = ({ title, subtitle, badge, badgeColor, images, description, showChatIcon }) => {
  
  const badgeColors = {
    red: "bg-red-500",
    blue: "bg-blue-500",
    green: "bg-green-500",
  };

  return (
    <div className="relative w-full h-[300px] rounded-lg overflow-hidden shadow-lg flex-1">
    
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="w-full h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={title} className="w-full h-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>

    
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      
      <span
        className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full text-white ${badgeColors[badgeColor]}`}
      >
        {badge}
      </span>

      {/* Fixed description text */}
      <div className="absolute top-3 right-3">
        <span className="px-3 py-1 text-xs font-semibold rounded-full text-white bg-black/70 backdrop-blur-sm">
          {description}
        </span>
      </div>

      {/* Chat icon (only on the last carousel) */}
      {showChatIcon && (
        <div className="absolute bottom-3 right-3">
          <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors">
            <MessageCircle size={18} className="text-gray-700" />
          </button>
        </div>
      )}
      
      {/* Title and subtitle */}
      <div className="absolute bottom-10 left-3 text-white">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm opacity-80">{subtitle}</p>
      </div>

    
      <style>{`
        .swiper-pagination {
          bottom: 6px !important;
          text-align: center !important;
        }
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.7) !important;
          opacity: 1 !important;
        }
        .swiper-pagination-bullet-active {
          background: #fff !important;
        }
      `}</style>
    </div>
  );
};

const PropertyGallery = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">

      <div className="flex gap-4">
        <GalleryItem
          title="Most Glove"
          subtitle="Urban Prime Plaza Premiere"
          badge="HOT"
          badgeColor="red"
          description="MOST CLICKED"
          images={[
            "/images/img1.jpg",
            "/images/img2.jpg",
            "/images/img3.jpg",
          ]}
        />
        <GalleryItem
          title="Most Watchlisted"
          subtitle="Urban Prime Plaza Premiere"
          badge="POPULAR"
          badgeColor="blue"
          description="MOST WATCHLISTED"
          images={[
            "/images/img4.jpg",
            "/images/img5.jpg",
            "/images/img6.jpg",
          ]}
        />
        <GalleryItem
          title="Hottest Listing"
          subtitle="Urban Prime Plaza Premiere"
          badge="TRENDING"
          badgeColor="green"
          description="HOTTEST LISTING"
          images={[
            "/images/img7.jpg",
            "/images/img8.jpg",
            "/images/img9.jpg",
          ]}
          showChatIcon={true}
        />
      </div>
    </div>
  );
};

export default PropertyGallery;