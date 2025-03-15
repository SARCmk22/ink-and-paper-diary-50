
import { ReactNode, useState, useEffect } from 'react';

interface ComparisonCardProps {
  title: string;
  children: ReactNode;
  delay?: number;
}

const ComparisonCard = ({ title, children, delay = 0 }: ComparisonCardProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`mb-12 border border-gray-800 rounded-lg overflow-hidden transition-all duration-800 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="bg-gray-900 p-4 border-b border-gray-800">
        <h3 className="text-xl font-semibold gold-text">{title}</h3>
      </div>
      <div className="p-6 space-y-4 bg-gray-950">
        {children}
      </div>
    </div>
  );
};

export default ComparisonCard;
