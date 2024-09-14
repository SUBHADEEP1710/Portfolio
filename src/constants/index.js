import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import intern1 from "../assets/projects/intern1.jpg"
import intern2 from "../assets/projects/intern2.jpg"
import intern3 from "../assets/projects/intern3.png"
import cert1 from "../assets/projects/cert1.jpg"
import cert2 from "../assets/projects/cert2.jpg"
import cert3 from "../assets/projects/cert3.jpg"
import cert4 from "../assets/projects/cert4.jpg"
import edu1 from "../assets/projects/edu-1.png"
import edu2 from "../assets/projects/edu-2.png"

export const HERO_CONTENT = `As a B.Tech student specializing in Computer Science Engineering (AIML) at the Institute of Engineering & Management, I maintain a CGPA of 9.2. My professional journey includes internships at Oasis Infobyte and Codsoft, where I developed strong web development and machine learning capabilities. My technical arsenal comprises Java, Python, C, HTML, CSS, JavaScript, ReactJS, PHP, and Node.js, enabling me to create impactful projects like API-based applications and advanced machine learning models.`;

export const ABOUT_TEXT = `Fluent in English, Hindi, and Bengali, I thrive in multilingual environments and am dedicated to lifelong learning, demonstrated by completing courses on AWS Cloud, data analytics, and web development. My problem-solving skills and academic excellence have been recognized through various achievements. I actively participate in tech events and hackathons, honing my leadership and technical skills. Driven by a passion for innovation, I aim to make significant contributions to the field of technology.`;

export const EXPERIENCES = [
  {
    year: "[July - August] 2024",
    image: intern3,
    role: "AI and Cloud Intern",
    company: "Edunet Foundation",
    description: `➔ Virtual Sessions: Engaged in 13 virtual sessions on Cloud Computing, AI, IBM Cloud (Watson Studio), Data Analytics,
                      Model Building, Auto AI, NLP/GenAI/LLM models, and ChatBot development.
                  ➔ EDA and Visualization: EDAand visualization on the FIFA 2019 dataset with 18,000+ data points using IBM Cloud.
                  ➔ AI Certifications: Acquired certificates for completing two advanced AI courses on the IBM SkillsBuild platform.
                  ➔ Model Deployment: Used AutoAI in IBM Cloud to build a Company Bankruptcy Prediction model having an accuracy of 97.3%.
                  ➔ ChatBot Development: Developed a chatbot with WatsonX Assistant, reducing code by 200-300 lines compared to traditional
                      Python methods.`,
    technologies: ["IBM Cloud", "Watson Studio", "Watson ML","Auto AI"],
  },
  {
    year: "[August - September] 2023",
    image: intern2,
    role: "Machine Learning Intern",
    company: "Codsoft",
    description: `➔ Credit Card Fraud Detection: Realized 99% accuracy on 1.2M+ Kaggle data points using Logistic Regression, demonstrating
                      robustness in large-scale fraud detection.
                  ➔ SMS Spam Detection: Secured 98% accuracy on UCI's SMS dataset with TF-IDF and Multinomial Naive Bayes, ensuring effective
                      spam filtering in communication channels.
                  ➔ IMDb Movie Genre Classifier: Executed a genre classifier with 58% validation accuracy and F1 score of 0.54 using Logistic
                      Regression and TF-IDF, enhancing content-based recommendation systems for movies.`,
    technologies: ["ML Models", "Pandas", "Tf-Idf", "Numpy"],
  },
  {
    year: "[October - November] 2023",
    image: intern1,
    role: "Web Development Intern",
    company: "Oasis Infobyte",
    description: `Developed 3 web projects using HTML, CSS, and JavaScript: a VPN landing page , a Portfolio template and a Temperature converter
(allowing conversions in Kelvin, Celcius and Fahrenheit).`,
    technologies: ["Html", "Css", "JavaScript","GitHub"],
  },
];

export const PROJECTS = [
  {
    title: "Centralized Job Aggregator Platform",
    image: project1,
    link:"https://subhadeep1710.github.io/Get-Hired/",
    description:
      "API-based platform to aggregate job postings on 10+ major professional networking sites .",
    technologies: ["HTML", "CSS", "JavaScript", "RapidAPI", "GitHub"],
  },
  {
    title: "Weather APP",
    image: project2,
    link:"https://subhadeep1710.github.io/Weather-APP/",
    description:
      "API based app which provides the current weather conditions of any city/region with an uptime of 99.99%.",
    technologies: ["HTML", "CSS", "JavaScript","RapidAPI", "GitHub"],
  },
  {
    title: "React Portfolio",
    image: project3,
    link:"#",
    description:
      "My Portfolio website to give a brief introduction of myself along with my experiences and projects",
    technologies: ["ReactJS", "TailwindCSS", "NodeJS", "Vite", "Framer Motion"],
  },
  {
    title: "Eduka",
    image: project4,
    link:"https://subhadeep1710.github.io/Educational-Website/",
    description:
      "An online educational website which provides courses on various topics for students from top instructors.",
    technologies: ["HTML", "CSS", "JavaScript", "GitHub"],
  },
  {
    title: "Online Hotel Booking System",
    image: project5,
    link:"https://github.com/SUBHADEEP1710/Hotel-Booking-System.git",
    description:
      "Worked in a two membered team to develop an online hotel booking system as part of DBMS curriculum.",
    technologies: ["HTML", "CSS", "JavaScript", "Php","SQL"],
  },
];


export const PROJECTS2 = [
  {
    title: "SMS Spam Detection",
    
    link:"https://colab.research.google.com/drive/1PPrrO4XoMvPF_3RchZcNOAz0aOyuVpzD",
    description:
      "Secured 98% accuracy on UCI's SMS dataset with TF-IDF and Multinomial Naive Bayes, ensuring effective spam filtering in communication channels.",
    technologies: ["NLTK", "Regular Expressions", "TfidfVectorizer", "GridSearchCV", "Scikit-Learn Pipeline"],
  },
  {
    title: "Credit Card Fraud Transaction",
    
    link:"https://colab.research.google.com/drive/1i1bPQYLfvWLpbqdPenATGzJh3PmvPOHo",
    description:
      "Realized 99% accuracy on 1.2M+ Kaggle data points using Logistic Regression, demonstrating robustness in large-scale fraud detection.",
    technologies: ["NumPy", "Scikit-Learn", "Pandas","Confusion Matrix", "Seaborn and Matplotlib"],
  },
  {
    title: "Movie Genre Classification",
    
    link:"https://colab.research.google.com/drive/1kkoOxb0pz4lHcGR8Rhi9NlLAaelQKX-P",
    description:
      "Executed a genre classifier with 58% validation accuracy and F1 score of 0.54 using Logistic Regression and TF-IDF, enhancing content-based recommendation systems for movies.",
    technologies: ["Pandas", "Scikit-Learn", "WordCloud","Logistic Regression", "Seaborn and Matplotlib"],
  },
  {
    title: "Text to Image",
    
    link:"https://colab.research.google.com/drive/1RMQH0RP81AR3Wmc28YnufvutFepo5BPZ",
    description:
      "This project leverages a Stable Diffusion model to generate images based on user-provided prompts through a Streamlit web interface. It includes capabilities for prompt generation, image resizing, and model state saving, ensuring efficient and user-friendly image creation.",
    technologies: ["Stable Diffusion Model", "Streamlit", "Transformers","Torch", "Joblib"],
  },
  
];

export const EDUCATION = [
  {
    title: "Institute of Engineering & Management, Salt Lake",
    year: "2021-2025",
    image: edu1,
    description:
      "Bachelor of Technology in Computer Science Engineering(AIML)",
    technologies: ["CGPA - 9.2"],
  },
  {
    title: "Vivekananda Mission School, Joka",
    year: "2021",
    image: edu2,
    description:
      "ISC(12th Boards) in Computer Science",
    technologies: ["Percentage - 87.4 %"],
  },
  {
    title: "Vivekananda Mission School, Joka",
    year: "2019",
    image: edu2,
    description:
      "ICSE(10th Boards) in Computer Science",
    technologies: ["Percentage - 95.9 %"],
  },
 
];

export const CERTIFICATIONS = [
  {
    title: "Oracle Cloud Infrastructure 2024 Generative AI Professional Certification",
    year: ["3rd July, 2024"],
    image: cert1,
    description:
      "The Oracle Cloud Infrastructure 2024 Generative AI Professional certification equips software developers and AI/ML engineers with skills in Large Language Models (LLM) and OCI Generative AI services. It covers concepts like RAG and LangChain for building, evaluating, and deploying LLM applications, requiring foundational knowledge in machine learning, deep learning, Python, and OCI."
  },
  {
    title: "Core Java (Specialization)",
    year: ["16th July, 2024"],
    image: cert2,
    description:
      "The Core Java Specialization is an online program consisting of four courses: Introduction to Java, Object-Oriented Programming, Hierarchies in Java, and the Java Class Library. The specialization focuses on mastering Java programming and core libraries. Learners develop Java-based applications through hands-on exercises, progressing from beginner to advanced concepts.",    
  },
  {
    title: "Google Data Analytics (Specialization)",
    year: ["10th August, 2024"],
    image: cert3,
    description:
      "The Google Data Analytics Professional Certificate is an eight-course program designed to prepare learners for entry-level roles in data analytics. The course covers key skills like data preparation, processing, analysis, and visualization using tools like spreadsheets, SQL, Tableau, and R. Through hands-on projects, learners gain practical experience in making data-driven decisions.",    
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    year: ["15th January, 2024"],
    image: cert4,
    description:
      "The AWS Cloud Practitioner Essentials course is an online, non-credit program authorized by Amazon Web Services. This course provides a foundational understanding of AWS cloud services, security, architecture, and pricing, preparing learners for entry-level cloud computing roles.",    
  },
 
];

export const CONTACT = {
  address: "D-3, Diamond Park, Joka, Kolkata-700104",
  phoneNo: "+91-9163184172",
  email: "subhadeep700104@gmail.com",
};
