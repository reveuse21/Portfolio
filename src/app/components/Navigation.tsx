import { ChevronDown } from 'lucide-react';

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNavigate: (index: number) => void;
}

export function Navigation({ currentSlide, totalSlides, onNavigate }: NavigationProps) {
  const slides = ['Cover', 'Summary', 'Services', 'Skills', 'Tools', 'Contact'];

  return (
    <>
      {/* Top Navigation Dots */}
      <div className="no-print fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-[#E8DED2]">
        <div className="flex items-center gap-3">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => onNavigate(index)}
              className={`group flex items-center gap-2 transition-all ${
                currentSlide === index ? 'text-[#8B7355]' : 'text-[#B8A89A] hover:text-[#6D5D4B]'
              }`}
              aria-label={`Go to ${slide} slide`}
            >
              <div
                className={`transition-all rounded-full ${
                  currentSlide === index
                    ? 'w-2 h-2 bg-[#8B7355]'
                    : 'w-2 h-2 bg-[#D4C4B0] group-hover:bg-[#A0826D]'
                }`}
              />
              <span className={`text-sm hidden md:inline transition-opacity ${
                currentSlide === index ? 'opacity-100 font-medium' : 'opacity-0 md:opacity-100'
              }`}>
                {slide}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Scroll Down Indicator (only on first slide) */}
      {currentSlide === 0 && (
        <button
          onClick={() => onNavigate(1)}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 text-[#B8A89A] hover:text-[#8B7355] transition-colors animate-bounce"
          aria-label="Scroll to next slide"
        >
          <span className="text-sm">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </button>
      )}

      {/* Side Navigation Dots (alternative design) */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => onNavigate(index)}
            className="group relative"
            aria-label={`Go to ${slide} slide`}
          >
            <div
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index
                  ? 'bg-[#8B7355] scale-125'
                  : 'bg-[#D4C4B0] hover:bg-[#A0826D]'
              }`}
            />
            <span className="absolute right-6 top-1/2 -translate-y-1/2 bg-[#3E2723] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {slide}
            </span>
          </button>
        ))}
      </div>
    </>
  );
}