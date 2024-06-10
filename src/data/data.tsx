import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Shreya Prasad's Portfolio",
  description: "Shreya Prasad's Portfolio",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Shreya Prasad.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Experienced Final year B.Tech Student at VIT Vellore, interned at SBI. <strong className="text-stone-100"></strong> Currently looking for
        opportunities in <strong className="text-stone-100">Software engineering , AI/ML Engineering or Data Science engineering.</strong>Practical hands on experience in machine learning, data science, and AI through internships and hackathons, selected for Google Girls India Hackathon 2024 and Samsung Prism GEN AI Metaverse Hackathon, eager to apply my skills in data science, AI, ML, or software development.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      In my free time, I enjoy <strong className="text-stone-100">painting</strong>,
      and surfing the net to stay updated in the <strong className="text-stone-100">tech world</strong>, or exploring some interesting projects on{' '}
        <strong className="text-stone-100">Artificial Intelligence</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/12HYXSPMVWUzA2jQ3lFYDWMqIt7Q8bwj0/view',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm a final-year Computer Science and Engineering student at VIT, Vellore, with practical experience in ML, data science, and AI through internships, hackathons, and club activities. I enjoy painting, listening to music, exploring new places, and traveling the world. My hobbies help me stay creative and inspired, fueling my passion for technology`,
  aboutItems: [
    {label: 'Location', text: 'Mumbai, India', Icon: MapIcon},
    {label: 'Age', text: '22', Icon: CalendarIcon},
    {label: 'Nationality', text: '  Indian/Asian', Icon: FlagIcon},
    {label: 'Interests', text: 'Machine learning, Deep Learning, SDE, AI, Painting, KungFu', Icon: SparklesIcon},
    {label: 'Study', text: 'Vellore Institute Of Technology', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Open to work', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 4,
      },
      {
        name: 'Hindi',
        level: 10,
      },
    ],
  },
  {
    name: 'Data Science',
    skills: [
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'Data Visualization',
        level: 7,
      },
      {
        name: 'SQL',
        level: 8,
      },
    ],
  },
  {
    name: 'Software Engineering',
    skills: [
      {
        name: 'Data Structures and Algorithms',
        level: 7,
      },
      {
        name: 'Agile project management',
        level: 5,
      },
      {
        name: 'Soft Skill',
        level: 8,
      },
    ],
  },
  {
    name: 'Machine Learning',
    skills: [
      {
        name: 'Mathematics and Statistics',
        level: 7,
      },
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'Machine Learning Algorithms',
        level: 5,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Multiple Disease Detection System',
    description: 'The project focuses on creating a robust system for detecting multiple diseases using advanced machine learning techniques, aiming to assist healthcare professionals in accurate diagnosis and treatment planning.',
    url: 'https://github.com/Shreyaprasad21/Multiple_Disease_Detection_System',
    image: porfolioImage1,
  },
  {
    title: 'Virtual AI Voice Assistant',
    description: 'The voice assistant is a Python project that employs speech recognition and text-to-speech functionalities. it greets users based on the time of day and is capable of answering questions using Wikipedia, opening specific websites like YouTube or Google and providing the current time. This project showcases a basic but functional voice assistant',
    url: 'https://github.com/Shreyaprasad21/Voice_Assistant_App',
    image: porfolioImage2,
  },
  {
    title: 'Face Detection App',
    description: ' The application leverages the power of real-time face detection through a webcam or video stream and includes interactive elements like a sidebar for profile details and user preferences.',
    url: 'https://github.com/Shreyaprasad21/Face_Detection_App',
    image: porfolioImage3,
  },
  {
    title: 'EV Market Analysis',
    description: 'This project analyzes the feasibility of an Electric Vehicle (EV) startup in India, focusing on the 2-wheeler and 4-wheeler markets. It explores market growth, consumer needs, and differentiation strategies for success.',
    url: 'https://github.com/Shreyaprasad21/EV_Market_Analysis',
    image: porfolioImage4,
  },
  {
    title: 'Market Segmentation McDonalds',
    description: 'The project aims to replicate a McDonalds case study using Python involving data analysis PCA for dimensionality reduction KMeans clustering segment profiling and decision tree classification for marketing segmentation.',
    url: 'https://github.com/Shreyaprasad21/Market_Segmentation_McDonalds',
    image: porfolioImage5,
  },
  {
    title: 'Business Purpose Chatbot',
    description: 'Using advanced Natural Language Processing methods, the project focuses on building a business-purpose chatbot to improve user engagement and sentiment analysis, ultimately enhancing customer interactions and satisfaction.',
    url: 'https://github.com/Shreyaprasad21/Business_Purpose_Chatbot',
    image: porfolioImage6,
  },
  {
    title: 'Feynn AI Product Service Prototype Development DNA classification app',
    description: 'This Python code builds a model to identify E. coli bacteria by analyzing DNA sequences. It downloads data, trains a model, and predicts E. coli presence in new sequences.',
    url: 'https://github.com/Shreyaprasad21/Feynn-AI-Product-Service-Prototype-Development-DNA-classification-app',
    image: porfolioImage7,
  },
  {
    title: 'Emotion Recognition Django Web App',
    description: 'Django app using neural networks for emotion recognition with scikit-learn MLP model trained on RAVDESS dataset, featuring a clean UI for audio-based emotion prediction.',
    url: 'https://github.com/Shreyaprasad21/Emotion_Detection_and_Recognition',
    image: porfolioImage8,
  },
  {
    title: 'DNA Classification for E.Coli Detection',
    description: 'The DNA Classification for E.Coli project, built on Django, employs an MLPClassifier to predict E.Coli presence in DNA sequences, featuring a user-friendly web interface for sequence input and classification results viewing, emphasizing reproducibility and deployment readiness.',
    url: 'https://github.com/Shreyaprasad21/DNA_Classifiation_for_Detecting_ECOLI',
    image: porfolioImage9,
  },
  {
    title: 'Credit Card Fraud Detection',
    description: 'Python project using Isolation Forest for credit card fraud detection, analyzing transaction data, visualizing distributions, and leveraging PyCaret for model comparison, with emphasis on Random Forest for effective fraud detection.',
    url: 'https://github.com/Shreyaprasad21/Credit_Card_Fraud_Detection',
    image: porfolioImage10,
  },
  {
    title: 'Text Detection and Recognition',
    description: 'Python script combining OCR and OpenCV for text detection and extraction from images, utilizing Tesseract OCR for initial extraction and OpenCV for advanced text enhancement and region highlighting.',
    url: 'https://github.com/Shreyaprasad21/Text_Detection_and_Recognition',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'July 2025',
    location: 'Vellore Institute of Technology',
    title: 'B.Tech in Computer Science and Engineering',
    content: <p>At college, I gained a solid foundation in Database Systems, Operating Systems, Compiler Design, Computer Networks, and Data Structures and Algorithms, enhancing my technical skills and problem-solving abilities.</p>,
  },
  {
    date: 'July 2020',
    location: 'MNR School of Excellence',
    title: 'Physics, Chemistry and Maths',
    content: <p>During school, I developed a strong academic foundation, excelled in science and mathematics, and cultivated a passion for technology and innovation.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Feburary 2024 - April 2024',
    location: 'Feynn Labs',
    title: 'Machine Learing Intern',
    content: (
      <p>
        Developed 3 cutting-edge AI product prototypes, conducted extensive research on the EV market, performed detailed market segmentation, and built comprehensive financial models for AI products.
      </p>
    ),
  },
  {
    date: 'August 2023 - September 2023',
    location: 'State Bank Of India',
    title: 'Data Science Intern',
    content: (
      <p>
       Developed and implemented a sophisticated Generative AI chatbot using the Llama-2-13B model, integrating FAISS, and enhancing the interface, significantly improving the banking experience for over 450 million customers.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Fred Brooks',
      text: 'Because of optimism, we usually expect the number of bugs to be smaller than it turns out to be. Therefore testing is usually the most mis-scheduled part of programming.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Ada Lovace',
      text: 'The more I study, the more insatiable do I feel my genius for it to be.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Bill Gates',
      text: 'Learning to write programs stretches your mind, and helps you think better, creates a way of thinking about things that I think is helpful in all domains',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'mailto:sp12554647@gmail.com',
      href: 'mailto:sp12554647@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Mumbai, India',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@shreyaaa.3001',
      href: 'https://www.instagram.com/shreyaaa.3001/',
    },
    {
      type: ContactType.Github,
      text: 'Shreyaprasad21',
      href: 'https://github.com/Shreyaprasad21',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Shreyaprasad21'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/25489020/shreya-prasad'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/shreya-prasad-749724230/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/shreyaaa.3001/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://x.com/prasad_shr37791'},
];
