
'use client';

import { useEffect, useRef, useState } from 'react';

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
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

  const categories = ['All', 'Web App', 'Mobile', 'API', 'Open Source'];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      category: 'Web App',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'Modern e-commerce website interface with clean product grid layout, shopping cart functionality, blue and white color scheme, professional design with payment integration, mobile responsive design',
      github: '#',
      live: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'React Native mobile application for team task management with real-time updates, push notifications, and offline synchronization.',
      category: 'Mobile',
      tech: ['React Native', 'Firebase', 'Redux'],
      image: 'Mobile task management app interface showing todo lists, progress tracking, team collaboration features, modern UI design with blue accents',
      github: '#',
      live: '#'
    },
    {
      id: 3,
      title: 'Weather API Service',
      description: 'RESTful API service built with Node.js and Express, providing real-time weather data with caching and rate limiting.',
      category: 'API',
      tech: ['Node.js', 'Express', 'Redis', 'Docker'],
      image: 'API documentation interface showing weather endpoints, JSON responses, developer tools, clean technical documentation design',
      github: '#',
      live: '#'
    },
    {
      id: 4,
      title: 'Portfolio Website Builder',
      description: 'Open-source tool for developers to create beautiful portfolio websites with customizable themes and easy deployment.',
      category: 'Open Source',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      image: 'Portfolio website builder interface with drag and drop components, theme customization panel, modern web development tools',
      github: '#',
      live: '#'
    },
    {
      id: 5,
      title: 'Real-time Chat Application',
      description: 'WebSocket-based chat application with rooms, file sharing, and emoji reactions built with Socket.io and React.',
      category: 'Web App',
      tech: ['React', 'Socket.io', 'Node.js', 'PostgreSQL'],
      image: 'Real-time chat application interface with message bubbles, emoji reactions, file sharing, modern messaging UI design',
      github: '#',
      live: '#'
    },
    {
      id: 6,
      title: 'Fitness Tracking App',
      description: 'Mobile app for tracking workouts, nutrition, and progress with social features and personal trainer integration.',
      category: 'Mobile',
      tech: ['Flutter', 'Firebase', 'Dart'],
      image: 'Fitness tracking mobile app showing workout statistics, progress charts, nutrition tracking, health dashboard with blue and green theme',
      github: '#',
      live: '#'
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className={`text-center mb-16 transform transition-all duration-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-800 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors cursor-pointer whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-blue-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={`https://readdy.ai/api/search-image?query=$%7Bproject.image%7D&width=400&height=250&seq=project-${project.id}&orientation=landscape`}
                  alt={project.title}
                  className="w-full h-48 object-cover object-top hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-600/90 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a 
                      href={project.github}
                      className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer"
                    >
                      <i className="ri-github-line text-white text-xl"></i>
                    </a>
                    <a 
                      href={project.live}
                      className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer"
                    >
                      <i className="ri-external-link-line text-white text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
