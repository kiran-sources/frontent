
'use client';

import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20minimalist%20office%20workspace%20with%20soft%20blue%20and%20white%20colors%2C%20clean%20desk%20setup%2C%20natural%20lighting%20streaming%20through%20large%20windows%2C%20professional%20atmosphere%2C%20subtle%20geometric%20patterns%20in%20background%2C%20contemporary%20design%20elements%2C%20peaceful%20and%20inspiring%20work%20environment%20with%20tech%20elements&width=1920&height=1080&seq=hero-bg-1&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/80"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Hi, I'm <span className="text-blue-600">Kiran Kakde</span>
          </h1>
          <h2 className="text-2xl lg:text-3xl text-gray-700 mb-6">
            Software Engineer
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Passionate full-stack developer with expertise in modern web technologies. 
            I create elegant solutions to complex problems and build applications that make a difference. 
            Always eager to learn new technologies and contribute to meaningful projects.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer whitespace-nowrap"
            >
              Get In Touch
            </button>
          </div>
        </div>
        
        <div className={`flex justify-center lg:justify-end transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="relative">
            <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20young%20software%20engineer%2C%20clean%20professional%20appearance%2C%20confident%20smile%2C%20modern%20casual%20business%20attire%2C%20neutral%20background%2C%20high%20quality%20portrait%20photography%2C%20approachable%20and%20competent%20expression%2C%20tech%20professional%20appearance&width=400&height=400&seq=profile-photo-1&orientation=squarish"
                alt="Kiran Kakde"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <i className="ri-code-s-slash-line text-2xl text-blue-600"></i>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-6 h-6 flex items-center justify-center cursor-pointer"
        >
          <i className="ri-arrow-down-line text-2xl text-gray-400"></i>
        </button>
      </div>
    </section>
  );
}
