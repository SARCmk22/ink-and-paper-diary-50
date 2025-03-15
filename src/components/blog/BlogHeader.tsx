
import { useState, useEffect } from 'react';

const BlogHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <header className="w-full py-12 md:py-20 border-b border-gray-800">
      <div className="container px-4 md:px-6">
        <div className="space-y-8 text-center">
          <div className={`space-y-2 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight text-balance text-white">
              ChatGPT vs. Claude: The Definitive Comparison for Business Users in 2025
            </h1>
            <p className="text-md md:text-lg text-gray-400 max-w-3xl mx-auto italic">
              Is your business using the wrong AI model? Our comprehensive analysis reveals which leading AI assistant delivers <span className="gold-text">37% better results</span> for specific business functions. The answer might surprise you.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;
