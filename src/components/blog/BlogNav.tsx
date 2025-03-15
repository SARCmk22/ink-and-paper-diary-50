
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BlogNav = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a 
            href="https://futureaidirectory.com" 
            className="flex items-center space-x-2 gold-text"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src="/lovable-uploads/c29424c1-fb4d-4c7c-ab38-ff5ad5fa2656.png" 
              alt="Future AI Directory Logo" 
              className="h-8 w-8" 
            />
            <span className="text-lg font-medium">Future AI Directory</span>
          </a>
          <div className="flex space-x-1">
            <Link 
              to="/" 
              className="px-4 py-2 rounded-md hover:bg-gray-900 transition-colors text-white"
            >
              Home
            </Link>
            <Link 
              to="/blog" 
              className="px-4 py-2 rounded-md bg-gray-900 font-medium transition-colors gold-text"
            >
              Blog
            </Link>
            <a 
              href="https://solutions.futureaidirectory.com" 
              className="px-4 py-2 rounded-md hover:bg-gray-900 transition-colors text-white"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Prompt Directory
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BlogNav;
