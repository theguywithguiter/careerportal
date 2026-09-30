const jobs = [

{
    id: 1,
    type: "Full Time",
    title: "Frontend Developer",
    company: "Google",
    location: "Bangalore",
    salary: "₹12 LPA",
    experience: "1-3 Years",

    description: "Google is looking for a Frontend Developer to build fast, responsive and user-friendly web applications using modern frontend technologies. You will collaborate with designers, backend engineers and product managers to create high-quality user experiences.",

    skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Git"
    ],

    responsibilities: [
        "Develop responsive web pages",
        "Build reusable React components",
        "Fix UI bugs and improve performance",
        "Collaborate with backend developers",
        "Write clean and maintainable code"
    ],

    about: "Google is a global technology company specializing in internet services, cloud computing, artificial intelligence and digital products used by billions of users worldwide."
},

{
    id: 2,
    type: "Internship",
    title: "Software Engineer Intern",
    company: "Microsoft",
    location: "Hyderabad",
    salary: "₹45K / month",
    experience: "Fresher",

    description: "Join Microsoft as a Software Engineer Intern and work on real-world software projects while learning from experienced engineers in a collaborative environment.",

    skills: [
        "C++",
        "Java",
        "Problem Solving",
        "Data Structures",
        "Git"
    ],

    responsibilities: [
        "Assist in software development",
        "Debug and test applications",
        "Write technical documentation",
        "Participate in team meetings",
        "Learn development best practices"
    ],

    about: "Microsoft develops world-class software, cloud solutions and AI technologies including Windows, Azure, Microsoft 365 and GitHub."
},

{
    id: 3,
    type: "Remote",
    title: "UI/UX Designer",
    company: "Adobe",
    location: "Remote",
    salary: "₹9 LPA",
    experience: "1-3 Years",

    description: "Adobe is hiring a creative UI/UX Designer to design intuitive user interfaces and engaging digital experiences for web and mobile applications.",

    skills: [
        "Figma",
        "Adobe XD",
        "Photoshop",
        "Illustrator",
        "Wireframing"
    ],

    responsibilities: [
        "Create wireframes and prototypes",
        "Design user-friendly interfaces",
        "Conduct user research",
        "Collaborate with developers",
        "Improve user experience"
    ],

    about: "Adobe is a leading software company known for creative tools such as Photoshop, Illustrator, Premiere Pro and Adobe XD."
},

{
    id: 4,
    type: "Full Time",
    title: "Backend Developer",
    company: "Amazon",
    location: "Delhi",
    salary: "₹15 LPA",
    experience: "3+ Years",

    description: "Amazon is seeking an experienced Backend Developer to build secure, scalable and high-performance backend services powering millions of customers.",

    skills: [
        "Java",
        "Spring Boot",
        "AWS",
        "SQL",
        "REST API"
    ],

    responsibilities: [
        "Develop backend services",
        "Design REST APIs",
        "Maintain databases",
        "Optimize application performance",
        "Ensure application security"
    ],

    about: "Amazon is one of the world's largest technology companies, providing e-commerce, cloud computing, AI and digital streaming services."
},

{
    id: 5,
    type: "Hybrid",
    title: "React Developer",
    company: "Infosys",
    location: "Kolkata",
    salary: "₹8 LPA",
    experience: "1-3 Years",

    description: "Infosys is looking for a React Developer to build enterprise-level web applications using modern JavaScript frameworks and best development practices.",

    skills: [
        "React",
        "JavaScript",
        "Redux",
        "HTML",
        "CSS"
    ],

    responsibilities: [
        "Develop reusable React components",
        "Integrate REST APIs",
        "Improve website performance",
        "Fix frontend issues",
        "Collaborate with UI/UX designers"
    ],

    about: "Infosys is a global leader in IT consulting, digital transformation and software development, serving clients in over 50 countries."
},

{
    id: 6,
    type: "Internship",
    title: "Java Developer",
    company: "TCS",
    location: "Pune",
    salary: "₹30K / month",
    experience: "Fresher",

    description: "TCS is looking for a Java Developer Intern to work on enterprise applications while gaining hands-on experience with real client projects and modern software development practices.",

    skills: [
        "Java",
        "OOP",
        "SQL",
        "Git",
        "Problem Solving"
    ],

    responsibilities: [
        "Develop Java modules",
        "Write clean and efficient code",
        "Debug software issues",
        "Support senior developers",
        "Participate in Agile meetings"
    ],

    about: "Tata Consultancy Services (TCS) is one of the world's leading IT services, consulting and business solutions organizations, serving clients in over 50 countries."
},

{
    id: 7,
    type: "Full Time",
    title: "Software Engineer",
    company: "Infosys",
    location: "Bangalore",
    salary: "₹9 LPA",
    experience: "1-3 Years",

    description: "Infosys is hiring a Software Engineer to develop scalable enterprise software solutions while collaborating with global teams on digital transformation projects.",

    skills: [
        "Java",
        "Python",
        "SQL",
        "Git",
        "Data Structures"
    ],

    responsibilities: [
        "Develop software applications",
        "Review and maintain code",
        "Fix production issues",
        "Participate in sprint planning",
        "Collaborate with cross-functional teams"
    ],

    about: "Infosys is a global technology services and consulting company helping businesses accelerate digital transformation."
},

{
    id: 8,
    type: "Remote",
    title: "React Developer",
    company: "Accenture",
    location: "Remote",
    salary: "₹11 LPA",
    experience: "1-3 Years",

    description: "Accenture is seeking a React Developer to create modern web applications with excellent performance and user experience for global enterprise clients.",

    skills: [
        "React",
        "JavaScript",
        "Redux",
        "REST API",
        "HTML & CSS"
    ],

    responsibilities: [
        "Develop responsive user interfaces",
        "Integrate frontend with backend APIs",
        "Optimize application performance",
        "Write reusable components",
        "Maintain project documentation"
    ],

    about: "Accenture is a global professional services company specializing in digital, cloud, technology and consulting services."
},

{
    id: 9,
    type: "Full Time",
    title: "Java Developer",
    company: "TCS",
    location: "Kolkata",
    salary: "₹7 LPA",
    experience: "Fresher",

    description: "Join TCS as a Java Developer and contribute to enterprise software solutions while building a strong foundation in backend development.",

    skills: [
        "Java",
        "Spring Boot",
        "SQL",
        "Git",
        "Problem Solving"
    ],

    responsibilities: [
        "Develop backend applications",
        "Maintain existing software",
        "Write unit tests",
        "Debug application issues",
        "Work closely with project teams"
    ],

    about: "TCS is among India's largest IT companies, delivering innovative technology solutions across multiple industries worldwide."
},

{
    id: 10,
    type: "Hybrid",
    title: "Python Developer",
    company: "Wipro",
    location: "Hyderabad",
    salary: "₹8.5 LPA",
    experience: "1-3 Years",

    description: "Wipro is hiring a Python Developer to build backend services, automation tools and scalable applications using modern Python frameworks.",

    skills: [
        "Python",
        "Django",
        "Flask",
        "SQL",
        "Git"
    ],

    responsibilities: [
        "Develop backend applications",
        "Build REST APIs",
        "Maintain databases",
        "Debug and optimize code",
        "Collaborate with frontend developers"
    ],

    about: "Wipro is a leading global technology services and consulting company delivering innovative digital solutions to clients around the world."
},
{
    id: 11,
    type: "Internship",
    title: "Web Development Intern",
    company: "Zoho",
    location: "Chennai",
    salary: "₹30K / month",
    experience: "Fresher",

    description: "Zoho is looking for a passionate Web Development Intern to build responsive web applications and learn modern frontend and backend development in a real-world environment.",

    skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Git"
    ],

    responsibilities: [
        "Develop responsive webpages",
        "Fix website bugs",
        "Assist senior developers",
        "Test web applications",
        "Learn industry best practices"
    ],

    about: "Zoho Corporation is a global software company offering cloud-based business applications including CRM, Mail, Projects and Workplace solutions."
},

{
    id: 12,
    type: "Full Time",
    title: "Backend Developer",
    company: "Amazon",
    location: "Bangalore",
    salary: "₹16 LPA",
    experience: "3+ Years",

    description: "Amazon is hiring an experienced Backend Developer to design and develop scalable cloud-based services capable of handling millions of customer requests every day.",

    skills: [
        "Java",
        "Spring Boot",
        "AWS",
        "MySQL",
        "REST API"
    ],

    responsibilities: [
        "Develop backend services",
        "Design scalable APIs",
        "Optimize database performance",
        "Review code quality",
        "Ensure application security"
    ],

    about: "Amazon is one of the world's largest technology companies, leading innovation in e-commerce, cloud computing, AI and digital services."
},

{
    id: 13,
    type: "Remote",
    title: "UI/UX Designer",
    company: "Adobe",
    location: "Remote",
    salary: "₹10 LPA",
    experience: "1-3 Years",

    description: "Adobe is seeking a creative UI/UX Designer to craft engaging user experiences and visually appealing interfaces for web and mobile platforms.",

    skills: [
        "Figma",
        "Adobe XD",
        "Illustrator",
        "Photoshop",
        "Prototyping"
    ],

    responsibilities: [
        "Design modern user interfaces",
        "Create interactive prototypes",
        "Conduct user research",
        "Improve user experience",
        "Work closely with developers"
    ],

    about: "Adobe is a world leader in creative software and digital media solutions, empowering designers, creators and businesses globally."
},

{
    id: 14,
    type: "Full Time",
    title: "Data Analyst",
    company: "Deloitte",
    location: "Pune",
    salary: "₹8 LPA",
    experience: "Fresher",

    description: "Deloitte is looking for a Data Analyst to collect, analyze and visualize business data to help organizations make informed decisions.",

    skills: [
        "SQL",
        "Excel",
        "Power BI",
        "Python",
        "Data Visualization"
    ],

    responsibilities: [
        "Analyze business data",
        "Create dashboards",
        "Generate reports",
        "Identify business trends",
        "Support decision-making"
    ],

    about: "Deloitte is one of the world's largest professional services firms providing consulting, audit, financial advisory and technology solutions."
},

{
    id: 15,
    type: "Hybrid",
    title: "AI Engineer",
    company: "IBM",
    location: "Bangalore",
    salary: "₹15 LPA",
    experience: "3+ Years",

    description: "IBM is hiring an AI Engineer to develop intelligent machine learning models and AI-powered solutions for enterprise-scale applications.",

    skills: [
        "Python",
        "Machine Learning",
        "TensorFlow",
        "PyTorch",
        "Deep Learning"
    ],

    responsibilities: [
        "Develop AI models",
        "Train machine learning algorithms",
        "Optimize model performance",
        "Deploy AI solutions",
        "Collaborate with data scientists"
    ],

    about: "IBM is a global technology company known for artificial intelligence, cloud computing, enterprise software and cutting-edge research."
},

{
    id: 16,
    type: "Full Time",
    title: "Cyber Security Analyst",
    company: "Capgemini",
    location: "Noida",
    salary: "₹10 LPA",
    experience: "1-3 Years",

    description: "Capgemini is looking for a Cyber Security Analyst to monitor, detect and respond to security threats while ensuring the safety of enterprise systems and sensitive business data.",

    skills: [
        "Network Security",
        "Ethical Hacking",
        "SIEM",
        "Linux",
        "Cyber Security"
    ],

    responsibilities: [
        "Monitor security incidents",
        "Perform vulnerability assessments",
        "Respond to cyber threats",
        "Prepare security reports",
        "Ensure compliance with security standards"
    ],

    about: "Capgemini is a global leader in consulting, technology services and digital transformation, helping businesses secure their digital infrastructure."
},

{
    id: 17,
    type: "Internship",
    title: "Machine Learning Intern",
    company: "NVIDIA",
    location: "Remote",
    salary: "₹50K / month",
    experience: "Fresher",

    description: "NVIDIA is offering an exciting Machine Learning Internship where you'll work with AI researchers on deep learning models and GPU-accelerated computing projects.",

    skills: [
        "Python",
        "Machine Learning",
        "TensorFlow",
        "PyTorch",
        "Data Analysis"
    ],

    responsibilities: [
        "Assist in AI model development",
        "Prepare datasets",
        "Train machine learning models",
        "Analyze model performance",
        "Document research findings"
    ],

    about: "NVIDIA is a global technology company known for GPUs, AI computing, autonomous driving and high-performance computing solutions."
},

{
    id: 18,
    type: "Full Time",
    title: "Cloud Engineer",
    company: "Oracle",
    location: "Hyderabad",
    salary: "₹13 LPA",
    experience: "3+ Years",

    description: "Oracle is hiring a Cloud Engineer to design, deploy and maintain secure cloud infrastructure while supporting enterprise applications on Oracle Cloud.",

    skills: [
        "Oracle Cloud",
        "Linux",
        "Docker",
        "Kubernetes",
        "Terraform"
    ],

    responsibilities: [
        "Deploy cloud infrastructure",
        "Monitor cloud resources",
        "Automate cloud operations",
        "Optimize system performance",
        "Maintain cloud security"
    ],

    about: "Oracle is a leading cloud technology company providing enterprise software, databases and cloud infrastructure services worldwide."
},

{
    id: 19,
    type: "Remote",
    title: "Frontend Developer",
    company: "Spotify",
    location: "Remote",
    salary: "₹18 LPA",
    experience: "3+ Years",

    description: "Spotify is looking for an experienced Frontend Developer to create beautiful, high-performance user interfaces for millions of music lovers worldwide.",

    skills: [
        "React",
        "TypeScript",
        "JavaScript",
        "CSS",
        "REST API"
    ],

    responsibilities: [
        "Develop modern frontend features",
        "Optimize application speed",
        "Maintain reusable components",
        "Collaborate with product designers",
        "Improve user experience"
    ],

    about: "Spotify is one of the world's leading music streaming platforms, serving millions of users with personalized audio experiences."
},

{
    id: 20,
    type: "Full Time",
    title: "DevOps Engineer",
    company: "Cisco",
    location: "Bangalore",
    salary: "₹14 LPA",
    experience: "3+ Years",

    description: "Cisco is seeking a DevOps Engineer to automate deployments, manage cloud infrastructure and improve software delivery pipelines.",

    skills: [
        "Docker",
        "Kubernetes",
        "Jenkins",
        "AWS",
        "Linux"
    ],

    responsibilities: [
        "Automate CI/CD pipelines",
        "Manage cloud infrastructure",
        "Monitor application performance",
        "Improve deployment processes",
        "Ensure system reliability"
    ],

    about: "Cisco is a global networking and cybersecurity company delivering innovative solutions for enterprise networking, cloud and security."
},

{
    id: 21,
    type: "Hybrid",
    title: "Business Analyst",
    company: "EY",
    location: "Mumbai",
    salary: "₹9.5 LPA",
    experience: "1-3 Years",

    description: "EY is hiring a Business Analyst to gather business requirements, analyze data and recommend technology-driven solutions for enterprise clients.",

    skills: [
        "Business Analysis",
        "Excel",
        "SQL",
        "Power BI",
        "Communication"
    ],

    responsibilities: [
        "Gather client requirements",
        "Analyze business processes",
        "Prepare reports and dashboards",
        "Coordinate with stakeholders",
        "Recommend business improvements"
    ],

    about: "EY (Ernst & Young) is one of the world's leading professional services firms, providing consulting, assurance, tax and strategy services globally."
},
{
    id: 22,
    type: "Full Time",
    title: "Android Developer",
    company: "Samsung",
    location: "Noida",
    salary: "₹12 LPA",
    experience: "1-3 Years",

    description: "Samsung is hiring an Android Developer to build high-performance mobile applications for Android devices using modern development practices and the latest Android SDK.",

    skills: [
        "Java",
        "Kotlin",
        "Android Studio",
        "Firebase",
        "REST API"
    ],

    responsibilities: [
        "Develop Android applications",
        "Fix application bugs",
        "Optimize app performance",
        "Integrate REST APIs",
        "Publish and maintain apps on Google Play"
    ],

    about: "Samsung is one of the world's leading technology companies, manufacturing smartphones, consumer electronics, semiconductors and innovative digital products."
},

{
    id: 23,
    type: "Remote",
    title: "Node.js Developer",
    company: "Paytm",
    location: "Remote",
    salary: "₹11 LPA",
    experience: "3+ Years",

    description: "Paytm is looking for a Node.js Developer to build secure, scalable backend services powering millions of digital payment transactions every day.",

    skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST API",
        "JavaScript"
    ],

    responsibilities: [
        "Develop backend APIs",
        "Maintain server-side applications",
        "Optimize database queries",
        "Implement authentication",
        "Ensure application security"
    ],

    about: "Paytm is India's leading digital payments and financial services platform, serving millions of users through payments, banking and commerce solutions."
},

{
    id: 24,
    type: "Full Time",
    title: "Full Stack Developer",
    company: "Flipkart",
    location: "Bangalore",
    salary: "₹17 LPA",
    experience: "3+ Years",

    description: "Flipkart is seeking an experienced Full Stack Developer to build scalable e-commerce platforms using modern frontend and backend technologies.",

    skills: [
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
        "JavaScript"
    ],

    responsibilities: [
        "Develop frontend and backend modules",
        "Build REST APIs",
        "Optimize website performance",
        "Collaborate with cross-functional teams",
        "Maintain application scalability"
    ],

    about: "Flipkart is one of India's largest e-commerce companies, providing online shopping services across electronics, fashion, groceries and more."
},

{
    id: 25,
    type: "Hybrid",
    title: "QA Engineer",
    company: "Tech Mahindra",
    location: "Pune",
    salary: "₹7.5 LPA",
    experience: "1-3 Years",

    description: "Tech Mahindra is looking for a QA Engineer to ensure software quality by designing, executing and automating test cases across enterprise applications.",

    skills: [
        "Manual Testing",
        "Selenium",
        "JIRA",
        "Test Automation",
        "SQL"
    ],

    responsibilities: [
        "Create test cases",
        "Execute functional testing",
        "Report software defects",
        "Perform regression testing",
        "Collaborate with developers"
    ],

    about: "Tech Mahindra is a leading IT services and consulting company providing digital transformation and technology solutions worldwide."
},

{
    id: 26,
    type: "Internship",
    title: "Software Testing Intern",
    company: "Cognizant",
    location: "Kolkata",
    salary: "₹25K / month",
    experience: "Fresher",
    description: "Cognizant is offering a Software Testing Internship where you'll learn quality assurance processes, testing methodologies and automation fundamentals while working on real software projects.",
    skills: ["Manual Testing", "Selenium", "SQL", "Bug Reporting", "Communication"],
    responsibilities: [
        "Execute test cases",
        "Identify and report bugs",
        "Document testing results",
        "Assist QA engineers",
        "Learn automation testing tools"
    ],
    about: "Cognizant is a global IT services and consulting company delivering digital engineering, cloud, AI and enterprise software solutions to clients worldwide."
},


{
    id: 27,
    type: "Full Time",
    title: "Frontend Developer Intern",
    company: "TCS",
    location: "Bangalore",
    salary: "₹20K / month",
    experience: "Fresher",
    description: "TCS is offering a Frontend Development role where you'll build responsive web interfaces using modern frameworks while collaborating with senior developers on live client projects.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Git"],
    responsibilities: [
        "Build UI components",
        "Fix responsive design issues",
        "Collaborate with design team",
        "Write clean, reusable code",
        "Participate in code reviews"
    ],
    about: "TCS is a leading global IT services, consulting, and business solutions organization serving clients across industries in 46 countries."
},


{
    id: 28,
    type: "Full Time",
    title: "Backend Developer",
    company: "Infosys",
    location: "Pune",
    salary: "₹6.5 LPA",
    experience: "1-3 years",
    description: "Infosys is looking for a Backend Developer to design and maintain scalable server-side applications and APIs for enterprise clients.",
    skills: ["Node.js", "Express", "MongoDB", "REST APIs", "Docker"],
    responsibilities: [
        "Develop and maintain backend services",
        "Design database schemas",
        "Optimize API performance",
        "Write unit and integration tests",
        "Collaborate with frontend teams"
    ],
    about: "Infosys is a global leader in next-generation digital services and consulting, enabling clients in 50+ countries to navigate their digital transformation."
},


{
    id: 29,
    type: "Internship",
    title: "Data Analyst Intern",
    company: "Accenture",
    location: "Hyderabad",
    salary: "₹18K / month",
    experience: "Fresher",
    description: "Accenture is offering a Data Analyst internship where you'll work with real datasets to generate insights, build dashboards, and support business decision-making.",
    skills: ["Excel", "SQL", "Power BI", "Python", "Data Visualization"],
    responsibilities: [
        "Clean and organize raw data",
        "Create dashboards and reports",
        "Perform exploratory data analysis",
        "Present insights to stakeholders",
        "Support data-driven decisions"
    ],
    about: "Accenture is a global professional services company providing strategy, consulting, digital, technology, and operations services."
},
{
    id: 30,
    type: "Full Time",
    title: "UI/UX Designer",
    company: "Wipro",
    location: "Chennai",
    salary: "₹5.5 LPA",
    experience: "1-3 years",
    description: "Wipro is hiring a UI/UX Designer to craft intuitive and visually appealing digital experiences for web and mobile applications.",
    skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping", "User Research"],
    responsibilities: [
        "Design wireframes and prototypes",
        "Conduct user research",
        "Collaborate with developers",
        "Maintain design systems",
        "Iterate based on user feedback"
    ],
    about: "Wipro is a leading technology services and consulting company focused on building innovative solutions for clients' digital transformation needs."
},


{
    id: 31,
    type: "Internship",
    title: "Java Developer Intern",
    company: "Capgemini",
    location: "Mumbai",
    salary: "₹22K / month",
    experience: "Fresher",
    description: "Capgemini is offering a Java Development internship where you'll build enterprise applications and learn object-oriented programming best practices.",
    skills: ["Java", "Spring Boot", "MySQL", "OOPs", "Git"],
    responsibilities: [
        "Develop Java-based modules",
        "Write and test backend logic",
        "Debug and fix issues",
        "Document code and processes",
        "Learn enterprise architecture patterns"
    ],
    about: "Capgemini is a global business and technology transformation partner helping organizations accelerate their digital and sustainable transition."
},


{
    id: 32,
    type: "Part Time",
    title: "Digital Marketing Executive",
    company: "Zomato",
    location: "Gurgaon",
    salary: "₹4.5 LPA",
    experience: "3+ years",
    description: "Zomato is looking for a Digital Marketing Executive to plan and execute campaigns across social media, SEO, and paid channels.",
    skills: ["SEO", "Google Ads", "Social Media Marketing", "Content Strategy", "Analytics"],
    responsibilities: [
        "Plan and run marketing campaigns",
        "Analyze campaign performance",
        "Manage social media accounts",
        "Optimize content for SEO",
        "Coordinate with creative teams"
    ],
    about: "Zomato is a leading online food delivery and restaurant discovery platform serving millions of users across India and abroad."
},


{
    id: 33,
    type: "Internship",
    title: "Machine Learning Intern",
    company: "IBM",
    location: "Bangalore",
    salary: "₹30K / month",
    experience: "Fresher",
    description: "IBM is offering a Machine Learning internship where you'll work on real-world AI models, data preprocessing, and model evaluation under expert mentorship.",
    skills: ["Python", "Machine Learning", "TensorFlow", "Pandas", "NumPy"],
    responsibilities: [
        "Preprocess and clean datasets",
        "Build and train ML models",
        "Evaluate model performance",
        "Document experiments",
        "Collaborate with research team"
    ],
    about: "IBM is a global technology and consulting company known for pioneering innovations in AI, cloud computing, and enterprise solutions."
},


{
    id: 34,
    type: "Full Time",
    title: "DevOps Engineer",
    company: "HCL Technologies",
    location: "Noida",
    salary: "₹7 LPA",
    experience: "3+ years",
    description: "HCL Technologies is seeking a DevOps Engineer to manage CI/CD pipelines, cloud infrastructure, and automate deployment processes.",
    skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Linux"],
    responsibilities: [
        "Manage CI/CD pipelines",
        "Automate deployment workflows",
        "Monitor system performance",
        "Manage cloud infrastructure",
        "Troubleshoot production issues"
    ],
    about: "HCL Technologies is a global technology company helping enterprises reimagine their businesses through digital transformation."
},


{
    id: 35,
    type: "Part Time",
    title: "Content Writer",
    company: "Byju's",
    location: "Remote",
    salary: "₹12K / month",
    experience: "1-3 years",
    description: "Byju's is looking for a part-time Content Writer to create educational and marketing content across multiple platforms.",
    skills: ["Content Writing", "SEO Writing", "Research", "Grammar", "Creativity"],
    responsibilities: [
        "Write blogs and articles",
        "Research trending topics",
        "Edit and proofread content",
        "Optimize content for SEO",
        "Collaborate with marketing team"
    ],
    about: "Byju's is one of India's largest edtech companies, providing engaging learning experiences for students across the globe."
},
{
    id: 36,
    type: "Full Time",
    title: "Business Analyst",
    company: "Deloitte",
    location: "Mumbai",
    salary: "₹8 LPA",
    experience: "1-3 years",
    description: "Deloitte is looking for a Business Analyst to bridge the gap between business needs and technical solutions for enterprise clients.",
    skills: ["Business Analysis", "SQL", "Excel", "Communication", "Problem Solving"],
    responsibilities: [
        "Gather business requirements",
        "Analyze processes and workflows",
        "Prepare documentation and reports",
        "Coordinate with stakeholders",
        "Support project implementation"
    ],
    about: "Deloitte is one of the world's largest professional services networks, offering audit, consulting, and advisory services globally."
},


{
    id: 37,
    type: "Internship",
    title: "Android Developer Intern",
    company: "PayTM",
    location: "Noida",
    salary: "₹20K / month",
    experience: "Fresher",
    description: "PayTM is offering an Android Development internship where you'll work on features for one of India's largest fintech apps.",
    skills: ["Kotlin", "Android SDK", "Java", "Firebase", "Git"],
    responsibilities: [
        "Develop Android app features",
        "Fix bugs and crashes",
        "Write unit tests",
        "Optimize app performance",
        "Collaborate with backend team"
    ],
    about: "PayTM is India's leading digital payments and financial services platform, serving millions of users and merchants."
},


{
    id: 38,
    type: "Full Time",
    title: "Cloud Support Engineer",
    company: "Amazon",
    location: "Hyderabad",
    salary: "₹9 LPA",
    experience: "1-3 years",
    description: "Amazon is hiring a Cloud Support Engineer to help customers troubleshoot and resolve AWS infrastructure issues.",
    skills: ["AWS", "Networking", "Linux", "Troubleshooting", "Communication"],
    responsibilities: [
        "Resolve customer cloud issues",
        "Monitor infrastructure health",
        "Document troubleshooting steps",
        "Escalate complex issues",
        "Improve support processes"
    ],
    about: "Amazon Web Services (AWS) is the world's leading cloud platform, offering computing power, storage, and services to millions of customers."
},


{
    id: 39,
    type: "Internship",
    title: "HR Intern",
    company: "Flipkart",
    location: "Bangalore",
    salary: "₹15K / month",
    experience: "Fresher",
    description: "Flipkart is offering an HR internship where you'll assist in recruitment, onboarding, and employee engagement activities.",
    skills: ["Communication", "MS Office", "Recruitment", "Organization", "Interpersonal Skills"],
    responsibilities: [
        "Assist in candidate screening",
        "Schedule interviews",
        "Support onboarding process",
        "Maintain employee records",
        "Help organize engagement events"
    ],
    about: "Flipkart is one of India's leading e-commerce platforms, offering a wide range of products and services to millions of customers."
},


{
    id: 40,
    type: "Full Time",
    title: "Full Stack Developer",
    company: "Swiggy",
    location: "Bangalore",
    salary: "₹10 LPA",
    experience: "3+ years",
    description: "Swiggy is looking for a Full Stack Developer to build and scale features across their food delivery and logistics platform.",
    skills: ["React", "Node.js", "MongoDB", "AWS", "System Design"],
    responsibilities: [
        "Develop full stack features",
        "Design scalable APIs",
        "Optimize application performance",
        "Collaborate with product teams",
        "Mentor junior developers"
    ],
    about: "Swiggy is India's leading on-demand delivery platform, connecting millions of users with restaurants and stores every day."
},


{
    id: 41,
    type: "Internship",
    title: "Cybersecurity Intern",
    company: "Tech Mahindra",
    location: "Pune",
    salary: "₹24K / month",
    experience: "Fresher",
    description: "Tech Mahindra is offering a Cybersecurity internship where you'll learn to identify vulnerabilities and assist in securing enterprise systems.",
    skills: ["Networking", "Ethical Hacking", "Linux", "Security Tools", "Problem Solving"],
    responsibilities: [
        "Assist in vulnerability assessments",
        "Monitor security systems",
        "Document security incidents",
        "Support penetration testing",
        "Learn security compliance standards"
    ],
    about: "Tech Mahindra is a leading provider of digital transformation, consulting, and business re-engineering services globally."
},


{
    id: 42,
    type: "Full Time",
    title: "QA Automation Engineer",
    company: "Genpact",
    location: "Kolkata",
    salary: "₹6 LPA",
    experience: "1-3 years",
    description: "Genpact is hiring a QA Automation Engineer to design and maintain automated test suites for enterprise applications.",
    skills: ["Selenium", "Java", "TestNG", "API Testing", "CI/CD"],
    responsibilities: [
        "Design automated test scripts",
        "Maintain test frameworks",
        "Execute regression testing",
        "Integrate tests into CI/CD pipelines",
        "Report and track defects"
    ],
    about: "Genpact is a global professional services firm specializing in digital transformation and business process management."
},


{
    id: 43,
    type: "Part Time",
    title: "Graphic Designer",
    company: "Myntra",
    location: "Bangalore",
    salary: "₹16K / month",
    experience: "1-3 years",
    description: "Myntra is looking for a part-time Graphic Designer to create visual content for marketing campaigns and app interfaces.",
    skills: ["Photoshop", "Illustrator", "Canva", "Creativity", "Typography"],
    responsibilities: [
        "Design marketing creatives",
        "Create social media graphics",
        "Support app UI visuals",
        "Collaborate with marketing team",
        "Maintain brand consistency"
    ],
    about: "Myntra is one of India's leading fashion and lifestyle e-commerce platforms, offering a wide range of brands and styles."
},


{
    id: 44,
    type: "Full Time",
    title: "Data Scientist",
    company: "Mu Sigma",
    location: "Bangalore",
    salary: "₹12 LPA",
    experience: "3+ years",
    description: "Mu Sigma is looking for a Data Scientist to build predictive models and derive actionable insights for enterprise clients.",
    skills: ["Python", "Machine Learning", "Statistics", "SQL", "Data Modeling"],
    responsibilities: [
        "Build predictive models",
        "Analyze large datasets",
        "Present findings to clients",
        "Collaborate with engineering teams",
        "Improve model accuracy"
    ],
    about: "Mu Sigma is a leading decision sciences and analytics company helping enterprises solve complex business problems using data."
},


{
    id: 45,
    type: "Internship",
    title: "Product Management Intern",
    company: "OYO",
    location: "Gurgaon",
    salary: "₹25K / month",
    experience: "Fresher",
    description: "OYO is offering a Product Management internship where you'll assist in feature planning, market research, and product roadmap execution.",
    skills: ["Market Research", "Communication", "Analytics", "Prioritization", "Wireframing"],
    responsibilities: [
        "Assist in feature research",
        "Analyze user feedback",
        "Support roadmap planning",
        "Coordinate with design and engineering",
        "Track product metrics"
    ],
    about: "OYO is one of the world's leading hospitality chains, offering accommodation solutions across thousands of cities globally."
},


{
    id: 46,
    type: "Full Time",
    title: "Network Engineer",
    company: "Reliance Jio",
    location: "Navi Mumbai",
    salary: "₹6.8 LPA",
    experience: "1-3 years",
    description: "Reliance Jio is hiring a Network Engineer to maintain and optimize telecom network infrastructure for millions of users.",
    skills: ["Networking", "Routing & Switching", "Troubleshooting", "Telecom Protocols", "Linux"],
    responsibilities: [
        "Maintain network infrastructure",
        "Monitor network performance",
        "Troubleshoot connectivity issues",
        "Implement network upgrades",
        "Ensure network security"
    ],
    about: "Reliance Jio is India's leading telecom operator, providing high-speed internet and digital services to hundreds of millions of users."
},

{
    id: 47,
    type: "Full Time",
    title: "Frontend Developer",
    company: "TCS",
    location: "Bangalore",
    salary: "₹6 LPA",
    experience: "1-3 years",
    description: "TCS is looking for a Frontend Developer to build responsive, user-friendly web interfaces for enterprise clients using modern frameworks.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Git"],
    responsibilities: [
        "Build UI components",
        "Fix responsive design issues",
        "Collaborate with design team",
        "Write clean, reusable code",
        "Participate in code reviews"
    ],
    about: "TCS is a leading global IT services, consulting, and business solutions organization serving clients across industries in 46 countries."
},

{
    id: 48,
    type: "Internship",
    title: "Backend Developer Intern",
    company: "Infosys",
    location: "Pune",
    salary: "₹20K / month",
    experience: "Fresher",
    description: "Infosys is offering a Backend Development internship where you'll learn to build and maintain scalable server-side applications and APIs.",
    skills: ["Node.js", "Express", "MongoDB", "REST APIs", "Docker"],
    responsibilities: [
        "Develop and maintain backend services",
        "Design database schemas",
        "Optimize API performance",
        "Write unit and integration tests",
        "Collaborate with frontend teams"
    ],
    about: "Infosys is a global leader in next-generation digital services and consulting, enabling clients in 50+ countries to navigate their digital transformation."
},

{
    id: 49,
    type: "Part Time",
    title: "Data Analyst",
    company: "Accenture",
    location: "Hyderabad",
    salary: "₹25K / month",
    experience: "3+ years",
    description: "Accenture is looking for a part-time Data Analyst to work with datasets, build dashboards, and support business decision-making.",
    skills: ["Excel", "SQL", "Power BI", "Python", "Data Visualization"],
    responsibilities: [
        "Clean and organize raw data",
        "Create dashboards and reports",
        "Perform exploratory data analysis",
        "Present insights to stakeholders",
        "Support data-driven decisions"
    ],
    about: "Accenture is a global professional services company providing strategy, consulting, digital, technology, and operations services."
},

{
    id: 50,
    type: "Full Time",
    title: "UI/UX Designer",
    company: "Wipro",
    location: "Chennai",
    salary: "₹5.5 LPA",
    experience: "Fresher",
    description: "Wipro is hiring a UI/UX Designer to craft intuitive and visually appealing digital experiences for web and mobile applications.",
    skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping", "User Research"],
    responsibilities: [
        "Design wireframes and prototypes",
        "Conduct user research",
        "Collaborate with developers",
        "Maintain design systems",
        "Iterate based on user feedback"
    ],
    about: "Wipro is a leading technology services and consulting company focused on building innovative solutions for clients' digital transformation needs."
},

{
    id: 51,
    type: "Internship",
    title: "Java Developer Intern",
    company: "Capgemini",
    location: "Mumbai",
    salary: "₹22K / month",
    experience: "Fresher",
    description: "Capgemini is offering a Java Development internship where you'll build enterprise applications and learn object-oriented programming best practices.",
    skills: ["Java", "Spring Boot", "MySQL", "OOPs", "Git"],
    responsibilities: [
        "Develop Java-based modules",
        "Write and test backend logic",
        "Debug and fix issues",
        "Document code and processes",
        "Learn enterprise architecture patterns"
    ],
    about: "Capgemini is a global business and technology transformation partner helping organizations accelerate their digital and sustainable transition."
},

{
    id: 52,
    type: "Full Time",
    title: "Digital Marketing Executive",
    company: "Zomato",
    location: "Gurgaon",
    salary: "₹4.5 LPA",
    experience: "1-3 years",
    description: "Zomato is looking for a Digital Marketing Executive to plan and execute campaigns across social media, SEO, and paid channels.",
    skills: ["SEO", "Google Ads", "Social Media Marketing", "Content Strategy", "Analytics"],
    responsibilities: [
        "Plan and run marketing campaigns",
        "Analyze campaign performance",
        "Manage social media accounts",
        "Optimize content for SEO",
        "Coordinate with creative teams"
    ],
    about: "Zomato is a leading online food delivery and restaurant discovery platform serving millions of users across India and abroad."
},

{
    id: 53,
    type: "Part Time",
    title: "Machine Learning Engineer",
    company: "IBM",
    location: "Bangalore",
    salary: "₹35K / month",
    experience: "3+ years",
    description: "IBM is looking for a part-time Machine Learning Engineer to work on AI models, data preprocessing, and model evaluation for ongoing projects.",
    skills: ["Python", "Machine Learning", "TensorFlow", "Pandas", "NumPy"],
    responsibilities: [
        "Preprocess and clean datasets",
        "Build and train ML models",
        "Evaluate model performance",
        "Document experiments",
        "Collaborate with research team"
    ],
    about: "IBM is a global technology and consulting company known for pioneering innovations in AI, cloud computing, and enterprise solutions."
},

{
    id: 54,
    type: "Full Time",
    title: "DevOps Engineer",
    company: "HCL Technologies",
    location: "Noida",
    salary: "₹7 LPA",
    experience: "3+ years",
    description: "HCL Technologies is seeking a DevOps Engineer to manage CI/CD pipelines, cloud infrastructure, and automate deployment processes.",
    skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Linux"],
    responsibilities: [
        "Manage CI/CD pipelines",
        "Automate deployment workflows",
        "Monitor system performance",
        "Manage cloud infrastructure",
        "Troubleshoot production issues"
    ],
    about: "HCL Technologies is a global technology company helping enterprises reimagine their businesses through digital transformation."
},

{
    id: 55,
    type: "Internship",
    title: "Content Writing Intern",
    company: "Byju's",
    location: "Remote",
    salary: "₹12K / month",
    experience: "Fresher",
    description: "Byju's is offering a Content Writing internship where you'll create educational and marketing content across multiple platforms.",
    skills: ["Content Writing", "SEO Writing", "Research", "Grammar", "Creativity"],
    responsibilities: [
        "Write blogs and articles",
        "Research trending topics",
        "Edit and proofread content",
        "Optimize content for SEO",
        "Collaborate with marketing team"
    ],
    about: "Byju's is one of India's largest edtech companies, providing engaging learning experiences for students across the globe."
},

{
    id: 56,
    type: "Full Time",
    title: "Business Analyst",
    company: "Deloitte",
    location: "Mumbai",
    salary: "₹8 LPA",
    experience: "1-3 years",
    description: "Deloitte is looking for a Business Analyst to bridge the gap between business needs and technical solutions for enterprise clients.",
    skills: ["Business Analysis", "SQL", "Excel", "Communication", "Problem Solving"],
    responsibilities: [
        "Gather business requirements",
        "Analyze processes and workflows",
        "Prepare documentation and reports",
        "Coordinate with stakeholders",
        "Support project implementation"
    ],
    about: "Deloitte is one of the world's largest professional services networks, offering audit, consulting, and advisory services globally."
},

{
    id: 57,
    type: "Part Time",
    title: "Android Developer",
    company: "PayTM",
    location: "Noida",
    salary: "₹28K / month",
    experience: "1-3 years",
    description: "PayTM is looking for a part-time Android Developer to work on features for one of India's largest fintech apps.",
    skills: ["Kotlin", "Android SDK", "Java", "Firebase", "Git"],
    responsibilities: [
        "Develop Android app features",
        "Fix bugs and crashes",
        "Write unit tests",
        "Optimize app performance",
        "Collaborate with backend team"
    ],
    about: "PayTM is India's leading digital payments and financial services platform, serving millions of users and merchants."
},

{
    id: 58,
    type: "Full Time",
    title: "Cloud Support Engineer",
    company: "Amazon",
    location: "Hyderabad",
    salary: "₹9 LPA",
    experience: "Fresher",
    description: "Amazon is hiring a Cloud Support Engineer to help customers troubleshoot and resolve AWS infrastructure issues.",
    skills: ["AWS", "Networking", "Linux", "Troubleshooting", "Communication"],
    responsibilities: [
        "Resolve customer cloud issues",
        "Monitor infrastructure health",
        "Document troubleshooting steps",
        "Escalate complex issues",
        "Improve support processes"
    ],
    about: "Amazon Web Services (AWS) is the world's leading cloud platform, offering computing power, storage, and services to millions of customers."
},
{
    id: 59,
    type: "Internship",
    title: "HR Intern",
    company: "Flipkart",
    location: "Bangalore",
    salary: "₹15K / month",
    experience: "Fresher",
    description: "Flipkart is offering an HR internship where you'll assist in recruitment, onboarding, and employee engagement activities.",
    skills: ["Communication", "MS Office", "Recruitment", "Organization", "Interpersonal Skills"],
    responsibilities: [
        "Assist in candidate screening",
        "Schedule interviews",
        "Support onboarding process",
        "Maintain employee records",
        "Help organize engagement events"
    ],
    about: "Flipkart is one of India's leading e-commerce platforms, offering a wide range of products and services to millions of customers."
},

{
    id: 60,
    type: "Full Time",
    title: "Full Stack Developer",
    company: "Swiggy",
    location: "Bangalore",
    salary: "₹10 LPA",
    experience: "3+ years",
    description: "Swiggy is looking for a Full Stack Developer to build and scale features across their food delivery and logistics platform.",
    skills: ["React", "Node.js", "MongoDB", "AWS", "System Design"],
    responsibilities: [
        "Develop full stack features",
        "Design scalable APIs",
        "Optimize application performance",
        "Collaborate with product teams",
        "Mentor junior developers"
    ],
    about: "Swiggy is India's leading on-demand delivery platform, connecting millions of users with restaurants and stores every day."
},

{
    id: 61,
    type: "Part Time",
    title: "Cybersecurity Analyst",
    company: "Tech Mahindra",
    location: "Pune",
    salary: "₹30K / month",
    experience: "1-3 years",
    description: "Tech Mahindra is looking for a part-time Cybersecurity Analyst to help identify vulnerabilities and secure enterprise systems.",
    skills: ["Networking", "Ethical Hacking", "Linux", "Security Tools", "Problem Solving"],
    responsibilities: [
        "Conduct vulnerability assessments",
        "Monitor security systems",
        "Document security incidents",
        "Support penetration testing",
        "Ensure security compliance"
    ],
    about: "Tech Mahindra is a leading provider of digital transformation, consulting, and business re-engineering services globally."
},

{
    id: 62,
    type: "Full Time",
    title: "QA Automation Engineer",
    company: "Genpact",
    location: "Kolkata",
    salary: "₹6 LPA",
    experience: "1-3 years",
    description: "Genpact is hiring a QA Automation Engineer to design and maintain automated test suites for enterprise applications.",
    skills: ["Selenium", "Java", "TestNG", "API Testing", "CI/CD"],
    responsibilities: [
        "Design automated test scripts",
        "Maintain test frameworks",
        "Execute regression testing",
        "Integrate tests into CI/CD pipelines",
        "Report and track defects"
    ],
    about: "Genpact is a global professional services firm specializing in digital transformation and business process management."
},

{
    id: 63,
    type: "Internship",
    title: "Graphic Design Intern",
    company: "Myntra",
    location: "Bangalore",
    salary: "₹16K / month",
    experience: "Fresher",
    description: "Myntra is offering a Graphic Design internship where you'll create visual content for marketing campaigns and app interfaces.",
    skills: ["Photoshop", "Illustrator", "Canva", "Creativity", "Typography"],
    responsibilities: [
        "Design marketing creatives",
        "Create social media graphics",
        "Support app UI visuals",
        "Collaborate with marketing team",
        "Maintain brand consistency"
    ],
    about: "Myntra is one of India's leading fashion and lifestyle e-commerce platforms, offering a wide range of brands and styles."
},
{
    id: 64,
    type: "Full Time",
    title: "Data Scientist",
    company: "Mu Sigma",
    location: "Bangalore",
    salary: "₹12 LPA",
    experience: "3+ years",
    description: "Mu Sigma is looking for a Data Scientist to build predictive models and derive actionable insights for enterprise clients.",
    skills: ["Python", "Machine Learning", "Statistics", "SQL", "Data Modeling"],
    responsibilities: [
        "Build predictive models",
        "Analyze large datasets",
        "Present findings to clients",
        "Collaborate with engineering teams",
        "Improve model accuracy"
    ],
    about: "Mu Sigma is a leading decision sciences and analytics company helping enterprises solve complex business problems using data."
},

{
    id: 65,
    type: "Part Time",
    title: "Product Management Associate",
    company: "OYO",
    location: "Gurgaon",
    salary: "₹32K / month",
    experience: "Fresher",
    description: "OYO is looking for a part-time Product Management associate to assist in feature planning, market research, and roadmap execution.",
    skills: ["Market Research", "Communication", "Analytics", "Prioritization", "Wireframing"],
    responsibilities: [
        "Assist in feature research",
        "Analyze user feedback",
        "Support roadmap planning",
        "Coordinate with design and engineering",
        "Track product metrics"
    ],
    about: "OYO is one of the world's leading hospitality chains, offering accommodation solutions across thousands of cities globally."
},

{
    id: 66,
    type: "Full Time",
    title: "Network Engineer",
    company: "Reliance Jio",
    location: "Navi Mumbai",
    salary: "₹6.8 LPA",
    experience: "1-3 years",
    description: "Reliance Jio is hiring a Network Engineer to maintain and optimize telecom network infrastructure for millions of users.",
    skills: ["Networking", "Routing & Switching", "Troubleshooting", "Telecom Protocols", "Linux"],
    responsibilities: [
        "Maintain network infrastructure",
        "Monitor network performance",
        "Troubleshoot connectivity issues",
        "Implement network upgrades",
        "Ensure network security"
    ],
    about: "Reliance Jio is India's leading telecom operator, providing high-speed internet and digital services to hundreds of millions of users."
},

{
    id: 67,
    type: "Internship",
    title: "Software Testing Intern",
    company: "L&T Infotech",
    location: "Chennai",
    salary: "₹18K / month",
    experience: "Fresher",
    description: "L&T Infotech is offering a Software Testing internship where you'll learn manual and automation testing while working on live client projects.",
    skills: ["Manual Testing", "Selenium", "SQL", "Bug Reporting", "Communication"],
    responsibilities: [
        "Execute test cases",
        "Identify and report bugs",
        "Document testing results",
        "Assist QA engineers",
        "Learn automation testing tools"
    ],
    about: "L&T Infotech (LTIMindtree) is a global technology consulting and digital solutions company helping enterprises drive their digital transformation."
}

];