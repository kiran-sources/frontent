
'use client';

import { useEffect, useRef, useState } from 'react';

export default function ResumeSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Kiran_Kakde_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'TechCorp Solutions',
      period: '2022 - Present',
      description: 'Lead full-stack development projects, mentor junior developers, and implement scalable solutions using React, Node.js, and AWS.',
      technologies: ['React', 'Node.js', 'AWS', 'TypeScript', 'PostgreSQL']
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations Inc.',
      period: '2020 - 2022',
      description: 'Developed and maintained web applications, collaborated with cross-functional teams, and improved application performance by 40%.',
      technologies: ['Vue.js', 'Python', 'Django', 'MongoDB', 'Docker']
    },
    {
      title: 'Frontend Developer',
      company: 'StartupTech',
      period: '2019 - 2020',
      description: 'Built responsive web interfaces, implemented UI/UX designs, and collaborated with designers to create user-friendly applications.',
      technologies: ['JavaScript', 'React', 'CSS3', 'HTML5', 'Git']
    }
  ];

  const education = [
    {
      degree: 'Master of Science in Computer Science',
      school: 'University of Technology',
      period: '2017 - 2019',
      description: 'Specialized in Software Engineering and Database Systems. Thesis on "Optimizing Database Performance in Distributed Systems".'
    },
    {
      degree: 'Bachelor of Science in Computer Engineering',
      school: 'State University',
      period: '2013 - 2017',
      description: 'Foundation in computer science fundamentals, algorithms, and software development. Graduated Magna Cum Laude.'
    }
  ];

  return (
    <section id="resume" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className={`text-center mb-16 transform transition-all duration-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Resume</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            My professional journey and educational background in software development
          </p>
          <button
            onClick={handleDownloadResume}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap inline-flex items-center"
          >
            <i className="ri-download-line text-xl mr-2"></i>
            Download Resume
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div className={`transform transition-all duration-800 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
              <div className="w-8 h-8 flex items-center justify-center mr-3">
                <i className="ri-briefcase-line text-2xl text-blue-600"></i>
              </div>
              Professional Experience
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-blue-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">{exp.title}</h4>
                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      <span className="text-blue-600 font-medium">{exp.company}</span>
                      <span className="text-gray-500 text-sm">{exp.period}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className={`transform transition-all duration-800 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
              <div className="w-8 h-8 flex items-center justify-center mr-3">
                <i className="ri-graduation-cap-line text-2xl text-blue-600"></i>
              </div>
              Education
            </h3>
            
            <div className="space-y-8 mb-12">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-blue-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">{edu.degree}</h4>
                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      <span className="text-blue-600 font-medium">{edu.school}</span>
                      <span className="text-gray-500 text-sm">{edu.period}</span>
                    </div>
                    <p className="text-gray-600">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <div className="w-8 h-8 flex items-center justify-center mr-3">
                <i className="ri-award-line text-2xl text-blue-600"></i>
              </div>
              Certifications
            </h3>
            
            <div className="space-y-4">
              {[
                'AWS Certified Solutions Architect',
                'Google Cloud Professional Developer',
                'MongoDB Certified Developer',
                'Scrum Master Certification'
              ].map((cert, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg flex items-center">
                  <div className="w-6 h-6 flex items-center justify-center mr-3">
                    <i className="ri-check-line text-green-600"></i>
                  </div>
                  <span className="text-gray-900">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
