import { MessageSquare, Target, Lightbulb, Zap } from 'lucide-react';

export function SkillsSlide() {
  const coreCompetencies = [
    {
      icon: MessageSquare,
      title: 'Communication',
      skills: ['Email Management', 'Client Correspondence', 'Professional Writing', 'Active Listening'],
    },
    {
      icon: Target,
      title: 'Organization',
      skills: ['Schedule Coordination', 'Task Prioritization', 'File Management', 'Process Optimization'],
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      skills: ['Critical Thinking', 'Quick Decision Making', 'Resourcefulness', 'Attention to Detail'],
    },
    {
      icon: Zap,
      title: 'Adaptability',
      skills: ['Fast-Paced Environments', 'Multi-tasking', 'Tech Savvy', 'Continuous Learning'],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F1ED] flex items-center justify-center p-8 py-16">
      <div className="max-w-5xl w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-[#3E2723] mb-4">
            Core Competencies
          </h2>
          <div className="w-16 h-1 bg-[#A0826D] rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-[#6D5D4B] max-w-2xl mx-auto">
            Essential skills and capabilities that drive exceptional virtual assistance
          </p>
        </div>

        {/* Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreCompetencies.map((competency, index) => {
            const Icon = competency.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-[#E8DED2]"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#E8DED2] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#8B7355]" />
                  </div>
                  <h3 className="text-2xl font-medium text-[#3E2723] pt-2">
                    {competency.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {competency.skills.map((skill, skillIndex) => (
                    <li 
                      key={skillIndex}
                      className="flex items-center gap-3 text-[#5D4E3E]"
                    >
                      <div className="w-1.5 h-1.5 bg-[#9CA986] rounded-full"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-[#6D5D4B] italic">
            Committed to delivering high-quality support with professionalism and reliability
          </p>
        </div>
      </div>
    </div>
  );
}