
import { ReactNode, useState, useEffect } from 'react';

interface BlogSectionProps {
  title: string;
  children: ReactNode;
  delay?: number;
}

const BlogSection = ({ title, children, delay = 0 }: BlogSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <section className={`py-10 transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight gold-text">{title}</h2>
        <div className="prose prose-invert max-w-none">
          {children}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
