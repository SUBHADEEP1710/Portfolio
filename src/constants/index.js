import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import intern1 from "../assets/projects/intern1.jpg"
import intern2 from "../assets/projects/intern2.jpg"
import edu1 from "../assets/projects/edu-1.png"
import edu2 from "../assets/projects/edu-2.png"

export const HERO_CONTENT = `As a B.Tech student specializing in Computer Science Engineering (AIML) at the Institute of Engineering & Management, I maintain a CGPA of 9.2. My professional journey includes internships at Oasis Infobyte and Codsoft, where I developed strong web development and machine learning capabilities. My technical arsenal comprises Java, Python, C, HTML, CSS, JavaScript, ReactJS, PHP, and Node.js, enabling me to create impactful projects like API-based applications and advanced machine learning models.`;

export const ABOUT_TEXT = `Fluent in English, Hindi, and Bengali, I thrive in multilingual environments and am dedicated to lifelong learning, demonstrated by completing courses on AWS Cloud, data analytics, and web development. My problem-solving skills and academic excellence have been recognized through various achievements. I actively participate in tech events and hackathons, honing my leadership and technical skills. Driven by a passion for innovation, I aim to make significant contributions to the field of technology.`;

export const EXPERIENCES = [
  {
    year: "[August - September] 2023",
    image: intern2,
    role: "Machine Learning Intern",
    company: "Codsoft",
    description: `Successfully deployed Logistic Regression model for credit card fraud detection, achieving an impressive accuracy of
                  99% on a Kaggle dataset comprising 1.2M+ datapoints.
                  Implemented a Multinomial NB model for SMS spam detection, attaining a remarkable 96% accuracy on a dataset
                  containing over 5000 datapoints.
                  Utilized TF-IDF vectorization and multinomial classification techniques to accurately classify movie genres within a Kaggle dataset.`,
    technologies: ["ML Models", "Pandas", "Tf-Idf", "Numpy"],
  },
  {
    year: "[October - November] 2023",
    image: intern1,
    role: "Web Development Intern",
    company: "Oasis Infobyte",
    description: `Worked on 3 assigned projects using HTML, CSS and JS. Designed and coded a Landing page for a VPN company, a Personal Portfolio template and a Temperature Converter website which converts Celcius to Fahrenheit and vice versa.`,
    technologies: ["Html", "Css", "JavaScript","GitHub"],
  },
];

export const PROJECTS = [
  {
    title: "Get Hired",
    image: project1,
    link:"https://subhadeep1710.github.io/Get-Hired/",
    description:
      "API based one-stop app to access all job postings on the largest professional networking sites with only 1.7s latency",
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
];


export const PROJECTS2 = [
  {
    title: "SMS Spam Detection",
    
    link:"https://colab.research.google.com/drive/1PPrrO4XoMvPF_3RchZcNOAz0aOyuVpzD",
    description:
      "Deployed an SMS spam detection model achieving 98% accuracy using the UCI dataset with 5000+ data points, employing text preprocessing, TF-IDF Vectorization, and Multinomial Naive Bayes with Scikit-learn",
    technologies: ["NLTK", "Regular Expressions", "TfidfVectorizer", "GridSearchCV", "Scikit-Learn Pipeline"],
  },
  {
    title: "Credit Card Fraud Transaction",
    
    link:"https://colab.research.google.com/drive/1i1bPQYLfvWLpbqdPenATGzJh3PmvPOHo",
    description:
      "Engineered a Logistic Regression model for Credit Card Fraud Detection with 99% accuracy on Kaggle's 1.2M+ data points, utilizing preprocessing, encoding, and evaluation through a confusion matrix and ROC curve with Pandas, Seaborn, Scikit-learn, and Matplotlib.",
    technologies: ["NumPy", "Scikit-Learn", "Pandas","Confusion Matrix", "Seaborn and Matplotlib"],
  },
  {
    title: "Movie Genre Classification",
    
    link:"https://colab.research.google.com/drive/1kkoOxb0pz4lHcGR8Rhi9NlLAaelQKX-P",
    description:
      "Formulated an IMDb Movie Genre Classifier using Logistic Regression and TF-IDF vectorization, reaching a validation accuracy of 58% and an F1 score of 0.54, leveraging Pandas, Seaborn, Scikit-learn, and WordCloud for preprocessing, analysis, and visualization.",
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
    technologies: ["Percentage - 88 %"],
  },
  {
    title: "Vivekananda Mission School, Joka",
    year: "2019",
    image: edu2,
    description:
      "ICSE(10th Boards) in Computer Science",
    technologies: ["Percentage - 96.4 %"],
  },
 
];

export const CONTACT = {
  address: "D-3, Diamond Park, Joka, Kolkata-700104",
  phoneNo: "+91 9163184172",
  email: "subhadeep700104@gmail.com",
};
