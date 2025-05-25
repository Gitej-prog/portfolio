import React, { useState, useEffect } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { motion } from "framer-motion";
import { FaGithub, FaEnvelope, FaSun, FaMoon, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

const projects = [
  {
    title: "Unauthorized VPN Detection System",
    description: "Real-time system that captures network traffic, extracts important features, and uses machine learning models to detect unauthorized VPN usage in corporate networks.",
    tech: "Purpose Python (Flask) | Backend API Server Scapy | Live Packet Capturing Scikit-learn | Model Training & Prediction React.js (Vite) | Frontend Dashboard Pandas, NumPy | Data Manipulation Random Forest, C4.5, KNN | Machine Learning Models",
    github: "https://github.com/Gitej-prog/packet-detection",
    image:"vpn-detection.png"
  },
  {
    title: "Youtube Comment Sentiment Analysis",
    description: "YouTube Comment Sentiment Analysis project extracts comments from YouTube videos and classifies them as positive, negative, or neutral using Natural Language Processing (NLP).",
    tech: "Python, NLTK, Flask",
    github: "https://github.com/Gitej-prog/yt-comment-sentiment-analysis",
    image:"youtube.png"
  },
  {
    title: "E-commerce Chatbot",
    description: "A Chatbot that will give all its heart to make you explore all the items you are wishing to buy.",
    tech: "LangChain, Ollama + Openrouter, FastAPI, Python ",
    github: "https://github.com/Gitej-prog/chatbot-ecommerce",
    image: "chatbot.png"
  }
];

const skills = [
  "C/C++", "Python", "MATLAB", "Arduino", "SolidWorks", "AutoCAD", "Git", "Linux"
];

const certifications = [
  {
    title: "Machine Learning - Coursera",
    issuer: "Stanford University",
    link: "https://coursera.org/certificate/ml-cert"
  },
  {
    title: "Embedded Systems",
    issuer: "NPTEL",
    link: "https://nptel.ac.in/certificate/embedded-systems"
  }
];

const experience = [
  {
    role: "Software Intern",
    company: "TechCorp",
    duration: "Jun 2023 - Sep 2023",
    details: "Developed internal tools using React and Flask."
  },
  {
    role: "Research Assistant",
    company: "University Lab",
    duration: "Jan 2023 - May 2023",
    details: "Worked on an IoT project to monitor air quality."
  }
];

const education = [
  {
    degree: "B.Tech in Computer Science Engineering (Specialization in AI and ML)",
    institution: "Pranveer Singh Institute of Technology, Kanpur",
    duration: "2022 - 2026",
    details: "Pursuing a Bachelor's degree with a focus on Artificial Intelligence and Machine Learning and software development."
  },
  {
    degree: "Higher Secondary Education (12th Grade)",
    institution: "Sri Ram Education Centre, Kanpur",
    duration: "2020 - 2021",
    details: "Completed with distinction in PCM stream."
  }
];

const testimonials = [
  {
    name: "Jane Smith",
    title: "Senior Developer at TechCorp",
    feedback: "John is a quick learner and a great team player. He delivered quality code during his internship."
  },
  {
    name: "Dr. Amit Verma",
    title: "Professor, University Lab",
    feedback: "He showed strong research capabilities and technical skills in our IoT project."
  }
];

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('theme');
    if (savedMode) {
      setDarkMode(savedMode === 'dark');
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <motion.main
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.3 } } }}
      className={`p-6 max-w-7xl mx-auto font-sans transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-b from-blue-50 via-white to-blue-100 text-gray-800"}`}
    >
      <motion.div variants={fadeUp} className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-600">My Portfolio</h1>
        <Button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun className="inline mr-2" /> : <FaMoon className="inline mr-2" />} {darkMode ? "Light Mode" : "Dark Mode"}
        </Button>
      </motion.div>

      <motion.div variants={fadeUp} className="flex justify-center mb-8">
        <img src="/images/profile.jpg" alt="John Doe" className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg" />
      </motion.div>

      <motion.section className="text-center mb-16" variants={fadeUp}>
        <h1 className="text-5xl font-extrabold text-blue-700 mb-3">Tejas Tiwari</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">Engineering Student | Software Developer | Full Stack Developer | Problem Solver</p>
        <div className="mt-6 space-x-4 flex justify-center flex-wrap gap-2">
          <Button asChild>
            <a href="mailto:tiwaritejas430@gmail.com"><FaEnvelope className="inline mr-2" />Contact Me</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
          </Button>
          <a href="https://linkedin.com/in/tejas-tiwari-6a999a33b" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-2xl hover:text-blue-800"><FaLinkedin /></a>
          <a href="https://twitter.com/TejasTiwari15" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-2xl hover:text-blue-800"><FaTwitter /></a>
        </div>
      </motion.section>

      <motion.section className="mb-16 bg-gradient-to-r from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl shadow-lg" variants={fadeUp}>
        <h2 className="text-3xl font-semibold mb-4 text-blue-600">About Me</h2>
        <p className="leading-relaxed">
          I'm a final-year engineering student passionate about building impactful projects using machine learning models
          and appealing it with full stack. I love solving real-world problems and continuously learning new technologies.
        </p>
      </motion.section>

      <motion.section className="mb-16" variants={fadeUp}>
        <h2 className="text-3xl font-semibold mb-4 text-blue-600">Experience</h2>
        <ul className="space-y-4">
          {experience.map((exp, index) => (
            <li key={index} className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-lg font-bold">{exp.role} @ {exp.company}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{exp.duration}</p>
              <p>{exp.details}</p>
            </li>
          ))}
        </ul>
      </motion.section>

      <motion.section className="mb-16" variants={fadeUp}>
        <h2 className="text-3xl font-semibold mb-4 text-blue-600">Education</h2>
        <ul className="space-y-4">
          {education.map((edu, index) => (
            <li key={index} className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-lg font-bold">{edu.degree} @ {edu.institution}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{edu.duration}</p>
              <p>{edu.details}</p>
            </li>
          ))}
        </ul>
      </motion.section>

      <motion.section className="mb-16" variants={fadeUp}>
        <h2 className="text-3xl font-semibold mb-4 text-blue-600">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium shadow transform transition-transform duration-300 hover:scale-105"
              variants={fadeUp}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.section>

      <motion.section className="mb-16" variants={fadeUp}>
        <h2 className="text-3xl font-semibold mb-4 text-blue-600">Certifications</h2>
        <ul className="list-disc list-inside space-y-2">
          {certifications.map((cert, index) => (
            <motion.li key={index} variants={fadeUp} className="hover:text-blue-500 transition-colors">
              <strong>{cert.title}</strong> by {cert.issuer} – <a href={cert.link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">View Certificate</a>
            </motion.li>
          ))}
        </ul>
      </motion.section>

      <motion.section className="mb-16" variants={fadeUp}>
        <h2 className="text-3xl font-semibold mb-6 text-blue-600">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div key={index} variants={fadeUp} whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="hover:shadow-2xl transition-shadow duration-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <CardContent className="p-5">
                  <img
                    src={`/images/projects/${project.image}`}
                    alt={`${project.title} screenshot`}
                    className="w-full h-48 object-cover rounded-lg mb-3"
                  />
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 flex items-center justify-between">
                    {project.title}
                    <span className="flex gap-2">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                        <FaGithub />
                      </a>
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm underline">Demo</a>
                      )}
                    </span>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{project.description}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Tech: {project.tech}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section className="mb-16" variants={fadeUp}>
        <h2 className="text-3xl font-semibold mb-4 text-blue-600">Testimonials</h2>
        <ul className="space-y-6">
          {testimonials.map((testimonial, index) => (
            <motion.li key={index} className="bg-blue-50 dark:bg-gray-800 p-5 rounded-xl shadow-md">
              <p className="text-lg italic text-gray-700 dark:text-gray-300">"{testimonial.feedback}"</p>
              <p className="mt-2 text-sm font-semibold text-blue-600 dark:text-blue-400">- {testimonial.name}, {testimonial.title}</p>
            </motion.li>
          ))}
        </ul>
      </motion.section>

      <motion.div className="fixed bottom-4 right-4 z-50">
        <a href="#top" className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors">
          <IoIosArrowUp size={20} />
        </a>
      </motion.div>
    </motion.main>
  );
}
