
'use client';

import { useEffect, useRef, useState } from 'react';

export default function AboutSection() {
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

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className={`text-center mb-16 transform transition-all duration-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transform transition-all duration-800 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
            <img 
              src="https://readdy.ai/api/search-image?query=Software%20engineer%20working%20at%20modern%20workspace%20with%20multiple%20monitors%2C%20coding%20environment%2C%20clean%20organized%20desk%2C%20natural%20lighting%2C%20professional%20development%20setup%2C%20focus%20on%20productivity%20and%20technology%2C%20modern%20office%20atmosphere%20with%20blue%20and%20white%20color%20scheme&width=600&height=400&seq=about-workspace-1&orientation=landscape"
              alt="Kiran at work"
              className="w-full h-96 object-cover object-top rounded-lg shadow-lg"
            />
          </div>
          
          <div className={`transform transition-all duration-800 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Crafting Digital Experiences with Code
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With over 5 years of experience in software development, I specialize in building 
              scalable web applications and mobile solutions. My journey began with a Computer 
              Science degree, and since then, I've been passionate about turning complex problems 
              into simple, beautiful, and intuitive solutions.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I believe in writing clean, maintainable code and staying up-to-date with the latest 
              technologies. When I'm not coding, you can find me contributing to open-source projects, 
              mentoring junior developers, or exploring new frameworks and tools.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600 text-sm">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                <div className="text-gray-600 text-sm">Technologies</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600 text-sm">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
