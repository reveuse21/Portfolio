import { CheckCircle2 } from 'lucide-react';

export function ProfessionalSummary() {
  const highlights = [
    'Appointment Setting',
    'Real Estate Support',
    'Executive Assistance',
    'Customer Service',
    'Schedule Management',
    'Client Inquiry Handling',
    'CRM Systems Maintenance',
    'Daily Operations Support',
  ];

  return (
    <div className="min-h-screen bg-[#F5F1ED] flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-[#3E2723] mb-4">
            Professional Summary
          </h2>
          <div className="w-16 h-1 bg-[#A0826D] rounded-full mx-auto"></div>
        </div>

        {/* Main Summary Card */}
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-8 border border-[#E8DED2]">
          <p className="text-lg text-[#5D4E3E] leading-relaxed mb-8">
            Results-driven professional with experience in appointment setting, real estate support, 
            executive assistance, and customer service. Highly organized and adaptable with strong 
            communication skills, capable of managing schedules, handling client inquiries, maintaining 
            CRM systems, and supporting smooth daily operations in fast-paced environments.
          </p>

          {/* Key Strengths */}
          <div className="border-t border-[#E8DED2] pt-8">
            <h3 className="text-xl font-medium text-[#3E2723] mb-6">Key Strengths</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#9CA986] mt-0.5 flex-shrink-0" />
                  <span className="text-[#5D4E3E]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <p className="text-[#6D5D4B] mb-4">Ready to streamline your business operations</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:dkimkhylle@gmail.com" 
              className="inline-flex items-center justify-center px-8 py-3 bg-[#8B7355] text-white rounded-lg hover:bg-[#A0826D] transition-colors"
            >
              Get in Touch
            </a>
            <a 
              href="tel:+639668231926" 
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#5D4E3E] border border-[#D4C4B0] rounded-lg hover:border-[#A0826D] hover:text-[#8B7355] transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}