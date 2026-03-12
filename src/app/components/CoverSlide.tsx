import { Mail, Phone, MapPin } from 'lucide-react';
import profileImage from '../../assets/b44a9de2855ff98d2a39e805da9ae9875385f14f.png';

export function CoverSlide() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <div className="flex flex-col md:flex-row items-end gap-12 md:gap-16">
          {/* Profile Image */}
          <div className="flex-shrink-0 mb-[60px]">
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -inset-1 bg-gradient-to-br from-[#A0826D] to-[#9CA986] rounded-2xl opacity-20"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={profileImage}
                  alt="Kim Khylle Destacamento"
                  className="w-full h-full object-cover object-[center_-10px]"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left mb-[60px]">
            {/* Top Rated Badge */}
            <div className="inline-flex items-center gap-2 bg-[#E8DED2] px-6 py-2 rounded-full mb-6">
              <span className="text-[#8B7355] text-sm font-medium">★ Top Rated Virtual Assistant</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#3E2723] mb-4">
              Kim Khylle Destacamento
            </h1>

            {/* Title */}
            <p className="text-lg md:text-xl lg:text-2xl text-[#6D5D4B] mb-8">
              Virtual Assistant | Real Estate VA | Executive Support
            </p>

            {/* Contact Information */}
            <div className="flex flex-col gap-4 text-[#5D4E3E]">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <MapPin className="w-5 h-5 text-[#9CA986]" />
                <span>Davao City, Philippines</span>
              </div>

              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Mail className="w-5 h-5 text-[#9CA986]" />
                <a href="mailto:dkimkhylle@gmail.com" className="hover:text-[#8B7355] transition-colors">
                  dkimkhylle@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Phone className="w-5 h-5 text-[#9CA986]" />
                <a href="tel:+639668231926" className="hover:text-[#8B7355] transition-colors">
                  +63 966 823 1926
                </a>
              </div>
            </div>

            {/* Decorative Line */}
            <div className="mt-8 flex items-center justify-center md:justify-start">
              <div className="w-24 h-1 bg-[#A0826D] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}