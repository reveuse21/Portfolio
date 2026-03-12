import { 
  Mail, 
  Calendar, 
  FileText, 
  Video, 
  MessageCircle, 
  CheckSquare, 
  Image, 
  Database,
  Cloud,
  Phone,
  Users2,
  BarChart3,
  Presentation,
  Globe,
  FolderOpen,
  Inbox
} from 'lucide-react';

export function ToolsSlide() {
  const toolCategories = [
    {
      category: 'Communication & Collaboration',
      tools: [
        { name: 'Gmail', icon: Mail },
        { name: 'Microsoft Outlook', icon: Inbox },
        { name: 'Zoom', icon: Video },
        { name: 'Slack', icon: MessageCircle },
        { name: 'Microsoft Teams', icon: Users2 },
        { name: 'WhatsApp Business', icon: Phone },
      ],
    },
    {
      category: 'Productivity & Organization',
      tools: [
        { name: 'Google Calendar', icon: Calendar },
        { name: 'Calendly', icon: Calendar },
        { name: 'Trello', icon: CheckSquare },
        { name: 'Asana', icon: CheckSquare },
        { name: 'ClickUp', icon: CheckSquare },
        { name: 'Notion', icon: FileText },
      ],
    },
    {
      category: 'Document & File Management',
      tools: [
        { name: 'Google Workspace', icon: FileText },
        { name: 'Microsoft Office 365', icon: Presentation },
        { name: 'Google Drive', icon: Cloud },
        { name: 'Dropbox', icon: FolderOpen },
        { name: 'OneDrive', icon: Cloud },
        { name: 'Canva', icon: Image },
      ],
    },
    {
      category: 'CRM & Data Management',
      tools: [
        { name: 'HubSpot', icon: Database },
        { name: 'Salesforce', icon: BarChart3 },
        { name: 'Zoho CRM', icon: Database },
        { name: 'Google Sheets', icon: BarChart3 },
        { name: 'Airtable', icon: Database },
        { name: 'Real Estate CRMs', icon: Globe },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center p-8 py-16">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-[#3E2723] mb-4">
            Tools & Software
          </h2>
          <div className="w-16 h-1 bg-[#A0826D] rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-[#6D5D4B] max-w-2xl mx-auto">
            Proficient in industry-leading tools and platforms to deliver efficient virtual assistance
          </p>
        </div>

        {/* Tools Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {toolCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-white rounded-xl p-6 shadow-sm border border-[#E8DED2]"
            >
              <h3 className="text-xl font-medium text-[#3E2723] mb-6 pb-3 border-b border-[#E8DED2]">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.tools.map((tool, toolIndex) => {
                  const Icon = tool.icon;
                  return (
                    <div 
                      key={toolIndex}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F5F1ED] transition-colors group"
                    >
                      <div className="w-10 h-10 bg-[#E8DED2] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#9CA986] transition-colors">
                        <Icon className="w-5 h-5 text-[#8B7355] group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-sm text-[#5D4E3E] font-medium">{tool.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Note */}
        <div className="mt-12 text-center bg-[#F5F1ED] rounded-xl p-6 border border-[#E8DED2]">
          <p className="text-[#6D5D4B]">
            <span className="font-medium text-[#3E2723]">Continuously learning</span> and adapting to new tools and technologies to provide the best service
          </p>
        </div>
      </div>
    </div>
  );
}
