import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function ContactSlide() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-[#3E2723] mb-4">
            Let's Work Together
          </h2>
          <div className="w-16 h-1 bg-[#A0826D] rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-[#6D5D4B] max-w-2xl mx-auto">
            Ready to enhance your productivity? Get in touch to discuss how I can support your business
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <a 
            href="mailto:dkimkhylle@gmail.com"
            className="bg-white rounded-xl p-6 hover:bg-[#F5F1ED] hover:shadow-lg transition-all duration-300 group border border-[#E8DED2]"
          >
            <div className="w-12 h-12 bg-[#E8DED2] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#9CA986] transition-colors mx-auto">
              <Mail className="w-6 h-6 text-[#8B7355] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-center font-medium text-[#3E2723] mb-2">Email</h3>
            <p className="text-center text-sm text-[#6D5D4B] break-all">dkimkhylle@gmail.com</p>
          </a>

          <a 
            href="tel:+639668231926"
            className="bg-white rounded-xl p-6 hover:bg-[#F5F1ED] hover:shadow-lg transition-all duration-300 group border border-[#E8DED2]"
          >
            <div className="w-12 h-12 bg-[#E8DED2] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#9CA986] transition-colors mx-auto">
              <Phone className="w-6 h-6 text-[#8B7355] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-center font-medium text-[#3E2723] mb-2">Phone</h3>
            <p className="text-center text-sm text-[#6D5D4B]">+63 966 823 1926</p>
          </a>

          <div className="bg-white rounded-xl p-6 border border-[#E8DED2]">
            <div className="w-12 h-12 bg-[#E8DED2] rounded-lg flex items-center justify-center mb-4 mx-auto">
              <MapPin className="w-6 h-6 text-[#8B7355]" />
            </div>
            <h3 className="text-center font-medium text-[#3E2723] mb-2">Location</h3>
            <p className="text-center text-sm text-[#6D5D4B]">Davao City, Philippines</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#8B7355] to-[#A0826D] rounded-2xl p-8 md:p-12 text-center text-white shadow-lg">
          <h3 className="text-2xl md:text-3xl font-light mb-4">
            Kim Khylle Destacamento
          </h3>
          <p className="text-[#F5F1ED] mb-2">Top Rated Virtual Assistant</p>
          <p className="text-[#F5F1ED] mb-8">
            Real Estate VA | Executive Support | Customer Service
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:dkimkhylle@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-[#8B7355] rounded-lg hover:bg-[#FAF8F5] transition-colors font-medium"
            >
              <Send className="w-4 h-4" />
              Send Email
            </a>
            <a 
              href="tel:+639668231926"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#6D5D4B] text-white rounded-lg hover:bg-[#5D4E3E] transition-colors font-medium"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-[#6D5D4B] text-sm">
          <p>Available for both short-term projects and long-term partnerships</p>
        </div>
      </div>
    </div>
  );
}