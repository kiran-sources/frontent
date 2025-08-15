
'use client';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: 'ri-github-fill',
      url: 'https://github.com/kirankakde'
    },
    {
      name: 'LinkedIn',
      icon: 'ri-linkedin-fill',
      url: 'https://linkedin.com/in/kirankakde'
    },
    {
      name: 'Twitter',
      icon: 'ri-twitter-fill',
      url: 'https://twitter.com/kirankakde'
    },
    {
      name: 'Email',
      icon: 'ri-mail-fill',
      url: 'mailto:kiran.kakde@email.com'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span style={{ fontFamily: '"Pacifico", serif' }}>Kiran Kakde</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Software Engineer passionate about creating innovative solutions 
              and building applications that make a difference.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors cursor-pointer"
                  title={link.name}
                >
                  <i className={`${link.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                About Me
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="block text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="block text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('resume')}
                className="block text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                Resume
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-3">
                  <i className="ri-mail-line"></i>
                </div>
                <a href="mailto:kiran.kakde@email.com" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  kiran.kakde@email.com
                </a>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-3">
                  <i className="ri-phone-line"></i>
                </div>
                <a href="tel:+15551234567" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-3">
                  <i className="ri-map-pin-line"></i>
                </div>
                <span className="text-gray-300">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Kiran Kakde. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">Built with Next.js & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
