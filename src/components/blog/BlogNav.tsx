
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
          <Link to="/" className="text-lg font-medium gold-text">
            Future AI Directory
          </Link>
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BlogNav;
