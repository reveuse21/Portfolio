import { Calendar, Briefcase, Users, Headphones, Database, Clock } from 'lucide-react';

export function ServicesSlide() {
  const services = [
    {
      icon: Calendar,
      title: 'Appointment Setting',
      description: 'Efficient scheduling and calendar management to keep your business running smoothly.',
    },
    {
      icon: Briefcase,
      title: 'Real Estate Support',
      description: 'Specialized assistance for real estate professionals including lead management and documentation.',
    },
    {
      icon: Users,
      title: 'Executive Assistance',
      description: 'Comprehensive administrative support to help executives focus on strategic priorities.',
    },
    {
      icon: Headphones,
      title: 'Customer Service',
      description: 'Professional client communication and inquiry handling with excellent attention to detail.',
    },
    {
      icon: Database,
      title: 'CRM Management',
      description: 'Maintain and update customer relationship management systems for optimal organization.',
    },
    {
      icon: Clock,
      title: 'Daily Operations',
      description: 'Support smooth day-to-day business operations in fast-paced environments.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center p-8 py-16">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-[#3E2723] mb-4">
            Services Offered
          </h2>
          <div className="w-16 h-1 bg-[#A0826D] rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-[#6D5D4B] max-w-2xl mx-auto">
            Comprehensive virtual assistance solutions tailored to support your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-lg hover:bg-[#F5F1ED] transition-all duration-300 group border border-[#E8DED2]"
              >
                <div className="w-12 h-12 bg-[#E8DED2] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#9CA986] transition-colors">
                  <Icon className="w-6 h-6 text-[#8B7355] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-medium text-[#3E2723] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#6D5D4B] leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}