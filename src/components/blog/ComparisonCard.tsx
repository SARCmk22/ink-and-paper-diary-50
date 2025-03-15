
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
      className={`mb-12 border border-gray-200 rounded-lg overflow-hidden transition-all duration-800 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="bg-gray-50 p-4 border-b border-gray-200">
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="p-6 space-y-4">
        {children}
      </div>
    </div>
  );
};

export default ComparisonCard;
