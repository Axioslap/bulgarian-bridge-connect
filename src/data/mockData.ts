export const mockMembers = [
  {
    id: 1,
    name: "Maria Ivanova",
    location: "Sofia, Bulgaria",
    education: "MBA from Wharton School",
    interests: ["FinTech", "Digital Banking", "Blockchain"],
    skills: ["Strategic Planning", "Team Leadership", "Product Management"],
    role: "Senior Product Manager at TechCorp",
    bio: "Passionate about bridging US-Bulgaria tech partnerships with 8+ years in product management.",
    businessInterest: "start-company",
    companyExpansionNeeds: ["Technical Co-founder", "Seed Funding", "Market Research"]
  },
  {
    id: 2,
    name: "Ivan Petrov",
    location: "Plovdiv, Bulgaria",
    education: "Computer Science at MIT",
    interests: ["AI/ML", "Startups", "Innovation"],
    skills: ["Machine Learning", "Python", "Data Science"],
    role: "AI Engineer at DataTech",
    bio: "MIT graduate specializing in machine learning applications for business intelligence.",
    businessInterest: "join-company",
    companyExpansionNeeds: ["AI Development", "Data Analytics", "Technical Leadership"]
  },
  {
    id: 3,
    name: "Elena Dimitrova",
    location: "Varna, Bulgaria",
    education: "Harvard Business School",
    interests: ["E-commerce", "Digital Marketing", "Growth"],
    skills: ["Digital Strategy", "Marketing Analytics", "Business Development"],
    role: "Growth Manager at RetailTech",
    bio: "Harvard MBA focused on scaling e-commerce businesses across European markets.",
    businessInterest: "start-company",
    companyExpansionNeeds: ["Marketing Expertise", "Business Development", "European Market Entry"]
  },
  {
    id: 4,
    name: "Georgi Stoyanov",
    location: "Burgas, Bulgaria",
    education: "Stanford University",
    interests: ["SaaS", "Enterprise Software", "Cloud Computing"],
    skills: ["Software Architecture", "Cloud Technologies", "Enterprise Sales"],
    role: "Solutions Architect at CloudTech",
    bio: "Stanford graduate with expertise in enterprise software solutions and cloud architecture.",
    businessInterest: "join-company",
    companyExpansionNeeds: ["Cloud Infrastructure", "Enterprise Solutions", "Technical Architecture"]
  },
  {
    id: 5,
    name: "Desislava Velkova",
    location: "Sofia, Bulgaria",
    education: "NYU Stern School of Business",
    interests: ["Impact Investing", "Social Innovation", "Sustainability"],
    skills: ["Impact Measurement", "Financial Modeling", "Stakeholder Management"],
    role: "Impact Investment Manager",
    bio: "NYU graduate focused on sustainable business models and social impact investing.",
    businessInterest: "start-company",
    companyExpansionNeeds: ["Impact Investment", "Sustainability Consulting", "Social Innovation"]
  }
];

export const mockMessages = [
  {
    id: 1,
    sender: "Maria Dimitrova",
    subject: "Networking Event Follow-up",
    preview: "Hi John, it was great meeting you at the Sofia networking event...",
    fullContent: "Hi John,\n\nIt was great meeting you at the Sofia networking event last week! I really enjoyed our conversation about digital marketing strategies for Bulgarian startups.\n\nI wanted to follow up on the collaboration opportunity we discussed. My team at TechSofia is currently working on a project that could benefit from your MBA expertise, particularly in the areas of business development and market analysis.\n\nWould you be available for a coffee meeting next week to discuss this further? I'm free Tuesday or Wednesday afternoon.\n\nBest regards,\nMaria Dimitrova\nCEO, TechSofia",
    time: "2 hours ago",
    unread: true
  },
  {
    id: 2,
    sender: "Alex Petrov",
    subject: "Business Partnership Opportunity",
    preview: "I saw your profile and think we could collaborate on...",
    fullContent: "Hi John,\n\nI saw your profile on the ABTC Bulgaria platform and was impressed by your background at Harvard Business School. I think we could collaborate on something exciting!\n\nI'm currently developing an AI-powered fintech solution for the Bulgarian market, and I'm looking for a business partner with strong strategic and financial expertise. Your experience could be exactly what we need to take this to the next level.\n\nThe opportunity involves:\n- Market strategy development\n- Investor relations\n- Business model optimization\n- Potential equity partnership\n\nWould you be interested in learning more? I'd love to set up a call to discuss the details.\n\nBest,\nAlex Petrov\nFounder, FinTech Innovations",
    time: "1 day ago",
    unread: true
  },
  {
    id: 3,
    sender: "ABTC Bulgaria",
    subject: "Upcoming Workshop Reminder",
    preview: "Don't forget about the U.S. Business Culture Workshop...",
    fullContent: "Dear John,\n\nThis is a friendly reminder about the upcoming U.S. Business Culture Workshop scheduled for July 3, 2023, at the American Corner Sofia.\n\nWorkshop Details:\n- Date: July 3, 2023\n- Time: 2:00 PM - 5:00 PM\n- Location: American Corner Sofia\n- Topic: Advanced Business Communication and Networking Strategies\n\nWhat to expect:\n- Interactive sessions on cross-cultural business communication\n- Networking best practices in the U.S. market\n- Case studies from successful Bulgarian-American business partnerships\n- Q&A session with industry experts\n\nPlease confirm your attendance by replying to this message. Light refreshments will be provided.\n\nWe look forward to seeing you there!\n\nBest regards,\nABTC Bulgaria Team",
    time: "3 days ago",
    unread: false
  }
];

export const mockDiscussionPosts = [
  {
    id: 1,
    author: "Maria Dimitrova",
    title: "Seeking Beta Testers for New Fintech App",
    content: "Hi everyone! I'm launching a new fintech app focused on cross-border payments between Bulgaria and the US. Looking for fellow entrepreneurs who'd be interested in beta testing. Would love to get feedback from this amazing community!",
    tags: ["Fintech", "Beta Testing", "Entrepreneurship"],
    likes: 12,
    comments: 5,
    timeAgo: "2 hours ago",
    isLiked: false
  },
  {
    id: 2,
    author: "Alex Petrov",
    title: "AI Ethics Discussion - Thoughts?",
    content: "Just attended an amazing conference on AI ethics at MIT. The discussions around bias in machine learning were particularly eye-opening. What are your thoughts on how we can ensure more ethical AI development in Bulgaria?",
    tags: ["AI", "Ethics", "Technology"],
    likes: 8,
    comments: 12,
    timeAgo: "1 day ago",
    isLiked: true
  },
  {
    id: 3,
    author: "Elena Georgiev",
    title: "Research Collaboration Opportunity",
    content: "Working on a research paper about economic impacts of US-Bulgaria tech partnerships. Looking for data points and case studies. Anyone interested in contributing or collaborating?",
    tags: ["Research", "Economics", "Collaboration"],
    likes: 6,
    comments: 3,
    timeAgo: "3 days ago",
    isLiked: false
  }
];

export const mockCuratedNews = [
  {
    id: 1,
    title: "AI Startup from Sofia Raises $2M Series A",
    category: "AI",
    date: "2 hours ago",
    isNew: true
  },
  {
    id: 2,
    title: "Bulgarian Tech Companies Expand to US Markets",
    category: "Technology",
    date: "1 day ago",
    isNew: true
  },
  {
    id: 3,
    title: "Startup Accelerator Opens in Plovdiv",
    category: "Startups",
    date: "3 days ago",
    isNew: false
  }
];

export const upcomingEvents = [
  {
    title: "Networking Mixer in Sofia",
    date: "June 15, 2023",
    location: "Sofia Tech Park"
  },
  {
    title: "U.S. Business Culture Workshop",
    date: "July 3, 2023",
    location: "American Corner Sofia"
  }
];

export const resourceLinks = [
  { title: "Guide to U.S. Business Etiquette", type: "PDF" },
  { title: "Pitch Deck Templates", type: "Templates" },
  { title: "Entrepreneurship Resources", type: "Links" }
];
