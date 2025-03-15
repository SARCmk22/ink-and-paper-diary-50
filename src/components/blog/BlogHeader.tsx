
import { useState, useEffect } from 'react';

const BlogHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <header className="w-full py-12 md:py-20 border-b border-gray-100">
      <div className="container px-4 md:px-6">
        <div className="space-y-8 text-center">
          <div className={`space-y-2 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight text-balance">
              7 Advanced AI Prompt Techniques That Cut Workload by 62%
            </h1>
            <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto italic">
              Is your team drowning in routine tasks while your AI tools sit underutilized? Discover how these advanced prompt techniques helped a Bangalore tech firm reduce administrative work by 62% and save $437,000 annually.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;
