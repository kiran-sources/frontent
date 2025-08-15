
'use client';

import { useEffect, useRef, useState } from 'react';

export default function SkillsSection() {
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

  const skills = [
    { name: 'JavaScript', level: 95, icon: 'ri-javascript-line' },
    { name: 'React', level: 90, icon: 'ri-reactjs-line' },
    { name: 'Node.js', level: 88, icon: 'ri-nodejs-line' },
    { name: 'Python', level: 85, icon: 'ri-code-line' },
    { name: 'TypeScript', level: 87, icon: 'ri-file-code-line' },
    { name: 'MongoDB', level: 82, icon: 'ri-database-2-line' },
    { name: 'AWS', level: 80, icon: 'ri-cloud-line' },
    { name: 'Docker', level: 78, icon: 'ri-stack-line' }
  ];

  const categories = [
    {
      title: 'Frontend',
      icon: 'ri-computer-line',
      techs: ['React', 'Next.js', 'Vue.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'TypeScript']
    },
    {
      title: 'Backend',
      icon: 'ri-server-line',
      techs: ['Node.js', 'Python', 'Express.js', 'Django', 'REST APIs', 'GraphQL', 'Microservices']
    },
    {
      title: 'Database',
      icon: 'ri-database-2-line',
      techs: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase', 'Prisma']
    },
    {
      title: 'DevOps & Tools',
      icon: 'ri-tools-line',
      techs: ['AWS', 'Docker', 'Kubernetes', 'Git', 'CI/CD', 'Jenkins', 'Linux']
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className={`text-center mb-16 transform transition-all duration-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skill Bars */}
        <div className={`mb-16 transform transition-all duration-800 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Proficiency Levels</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 flex items-center justify-center mr-3">
                    <i className={`${skill.icon} text-xl text-blue-600`}></i>
                  </div>
                  <span className="font-medium text-gray-900">{skill.name}</span>
                  <span className="ml-auto text-sm text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000 delay-${(index + 1) * 100}`}
                    style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div 
              key={category.title}
              className={`bg-gray-50 p-6 rounded-lg text-center transform transition-all duration-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${category.icon} text-2xl text-blue-600`}></i>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h4>
              <div className="space-y-2">
                {category.techs.map((tech) => (
                  <span key={tech} className="inline-block bg-white px-3 py-1 rounded-full text-sm text-gray-700 mx-1 mb-2">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
