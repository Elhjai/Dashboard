import React from "react";
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";

const GalleryItem = ({ title, subtitle, badge, badgeColor, images, description, showChatIcon, isActive, onClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const badgeColors = {
    red: "bg-red-500",
    blue: "bg-blue-500",
    green: "bg-green-500",
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div 
      className={`
        relative w-full rounded-lg overflow-hidden shadow-lg cursor-pointer transition-all duration-300
        ${isActive 
          ? 'h-64 sm:h-72 md:h-80 lg:h-[300px] flex-[2]' 
          : 'h-48 sm:h-56 md:h-64 lg:h-[300px] flex-1 hover:flex-[1.2]'
        }
      `}
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative w-full h-full">
        <img 
          src={images[currentImageIndex]} 
          alt={title} 
          className="w-full h-full object-cover transition-opacity duration-500" 
        />
        
        {/* Navigation arrows - visible on hover for desktop, always visible on mobile when active */}
        {(isActive || images.length > 1) && (
          <>
            <button
              onClick={prevImage}
              className={`
                absolute left-2 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 bg-black/50 hover:bg-black/70 
                rounded-full text-white transition-all duration-200
                ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
              `}
            >
              <ChevronLeft size={16} className="sm:size-5" />
            </button>
            <button
              onClick={nextImage}
              className={`
                absolute right-2 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 bg-black/50 hover:bg-black/70 
                rounded-full text-white transition-all duration-200
                ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
              `}
            >
              <ChevronRight size={16} className="sm:size-5" />
            </button>
          </>
        )}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Badge */}
      <span
        className={`
          absolute top-2 sm:top-3 left-2 sm:left-3 px-2 sm:px-3 py-1 text-xs font-semibold 
          rounded-full text-white ${badgeColors[badgeColor]}
        `}
      >
        {badge}
      </span>

      {/* Description */}
      <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
        <span className="px-2 sm:px-3 py-1 text-xs font-semibold rounded-full text-white bg-black/70 backdrop-blur-sm">
          {description}
        </span>
      </div>

      {/* Chat icon (only when specified) */}
      {showChatIcon && (
        <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3">
          <button 
            className="p-1.5 sm:p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <MessageCircle size={16} className="text-gray-700 sm:size-[18px]" />
          </button>
        </div>
      )}
      
      {/* Title and subtitle */}
      <div className="absolute bottom-8 sm:bottom-10 left-2 sm:left-3 text-white pr-2">
        <h3 className={`font-bold leading-tight ${isActive ? 'text-base sm:text-lg' : 'text-sm sm:text-base'}`}>
          {title}
        </h3>
        <p className={`opacity-80 leading-tight ${isActive ? 'text-sm' : 'text-xs sm:text-sm'}`}>
          {subtitle}
        </p>
      </div>

      {/* Pagination dots */}
      {images.length > 1 && (
        <div className="absolute bottom-1 sm:bottom-1.5 left-1/2 -translate-x-1/2 flex space-x-1">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex(index);
              }}
              className={`
                w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-200
                ${index === currentImageIndex 
                  ? 'bg-white scale-110' 
                  : 'bg-white/70 hover:bg-white/90'
                }
              `}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const PropertyGallery = () => {
  const [activeItemIndex, setActiveItemIndex] = React.useState(0);

  const galleryItems = [
    {
      title: "Most Glove",
      subtitle: "Urban Prime Plaza Premiere",
      badge: "HOT",
      badgeColor: "red",
      description: "MOST CLICKED",
      images: [
        "/images/img1.jpg",
        "/images/img2.jpg",
        "/images/img3.jpg",
      ],
    },
    {
      title: "Most Watchlisted",
      subtitle: "Urban Prime Plaza Premiere",
      badge: "POPULAR",
      badgeColor: "blue",
      description: "MOST WATCHLISTED",
      images: [
        "/images/img4.jpg",
        "/images/img5.jpg",
        "/images/img6.jpg",
      ],
    },
    {
      title: "Hottest Listing",
      subtitle: "Urban Prime Plaza Premiere",
      badge: "TRENDING",
      badgeColor: "green",
      description: "HOTTEST LISTING",
      images: [
        "/images/img7.jpg",
        "/images/img8.jpg",
        "/images/img9.jpg",
      ],
      showChatIcon: true,
    },
  ];

  // Auto-rotate active item
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveItemIndex((prev) => (prev + 1) % galleryItems.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [galleryItems.length]);

  return (
    <div className="bg-white p-3 sm:p-4 lg:p-6 rounded-lg shadow-sm sm:shadow">
      {/* Header - Mobile */}
      <div className="mb-4 sm:hidden">
        <h2 className="text-lg font-bold text-gray-900 mb-1">Property Gallery</h2>
        <p className="text-sm text-gray-600">Discover trending properties</p>
      </div>

      {/* Mobile - Stacked Layout */}
      <div className="sm:hidden space-y-3">
        {galleryItems.map((item, index) => (
          <GalleryItem
            key={index}
            {...item}
            isActive={true}
            onClick={() => setActiveItemIndex(index)}
          />
        ))}
      </div>

      {/* Desktop/Tablet - Side by side Layout */}
      <div className="hidden sm:flex gap-2 md:gap-3 lg:gap-4 group">
        {galleryItems.map((item, index) => (
          <GalleryItem
            key={index}
            {...item}
            isActive={activeItemIndex === index}
            onClick={() => setActiveItemIndex(index)}
          />
        ))}
      </div>

      {/* Active Item Indicator - Mobile */}
      <div className="flex justify-center mt-4 sm:hidden space-x-2">
        {galleryItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveItemIndex(index)}
            className={`
              w-2 h-2 rounded-full transition-all duration-200
              ${index === activeItemIndex 
                ? 'bg-blue-500 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
              }
            `}
          />
        ))}
      </div>

      {/* Active Item Info - Desktop */}
      <div className="hidden lg:block mt-4 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-gray-900">
              {galleryItems[activeItemIndex].title}
            </h3>
            <p className="text-sm text-gray-600">
              {galleryItems[activeItemIndex].subtitle}
            </p>
          </div>
          <div className="flex space-x-2">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveItemIndex(index)}
                className={`
                  w-3 h-3 rounded-full transition-all duration-200
                  ${index === activeItemIndex 
                    ? 'bg-blue-500' 
                    : 'bg-gray-300 hover:bg-gray-400'
                  }
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyGallery;