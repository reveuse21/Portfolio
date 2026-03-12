import { useState, useEffect } from 'react';
import { CoverSlide } from './components/CoverSlide';
import { ProfessionalSummary } from './components/ProfessionalSummary';
import { ServicesSlide } from './components/ServicesSlide';
import { SkillsSlide } from './components/SkillsSlide';
import { ToolsSlide } from './components/ToolsSlide';
import { ContactSlide } from './components/ContactSlide';
import { Navigation } from './components/Navigation';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 6;
  
  const slides = [
    <CoverSlide key="cover" />,
    <ProfessionalSummary key="summary" />,
    <ServicesSlide key="services" />,
    <SkillsSlide key="skills" />,
    <ToolsSlide key="tools" />,
    <ContactSlide key="contact" />,
  ];

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalSlides]);

  // Handle scroll navigation
  useEffect(() => {
    let isScrolling = false;
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;
      
      const currentSlideElement = document.getElementById(`slide-${currentSlide}`);
      if (!currentSlideElement) return;

      const { scrollTop, scrollHeight, clientHeight } = currentSlideElement;
      const isAtTop = scrollTop === 0;
      const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 1;

      // Only change slides if at the edge and scrolling in that direction
      if (e.deltaY > 0 && isAtBottom && currentSlide < totalSlides - 1) {
        // Scrolling down and at bottom
        e.preventDefault();
        isScrolling = true;
        setTimeout(() => {
          isScrolling = false;
        }, 1000);
        setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
      } else if (e.deltaY < 0 && isAtTop && currentSlide > 0) {
        // Scrolling up and at top
        e.preventDefault();
        isScrolling = true;
        setTimeout(() => {
          isScrolling = false;
        }, 1000);
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [totalSlides, currentSlide]);

  // Handle touch swipe
  useEffect(() => {
    let touchStartY = 0;
    
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
        } else {
          setCurrentSlide((prev) => Math.max(prev - 1, 0));
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [totalSlides]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#FAF8F5]">
      {/* Navigation */}
      <Navigation
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onNavigate={setCurrentSlide}
      />

      {/* Slides Container */}
      <div
        id="slides-container"
        className="flex flex-col transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateY(-${currentSlide * 100}vh)` }}
      >
        {slides.map((slide, index) => (
          <div 
            key={index} 
            id={`slide-${index}`}
            className="print-slide min-w-full min-h-screen h-screen flex-shrink-0 overflow-y-auto"
          >
            {slide}
          </div>
        ))}
      </div>

      {/* Print Button (optional) */}
      <button
        onClick={() => window.print()}
        className="no-print fixed bottom-8 right-8 z-50 bg-white text-[#5D4E3E] px-4 py-2 rounded-lg shadow-lg hover:shadow-xl hover:bg-[#F5F1ED] transition-all text-sm font-medium border border-[#E8DED2]"
      >
        Print Portfolio
      </button>
    </div>
  );
}