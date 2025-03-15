
import { ReactNode, useState, useEffect } from 'react';

interface ModelStrengthsProps {
  title: string;
  items: string[];
  delay?: number;
}

const ModelStrengths = ({ title, items, delay = 0 }: ModelStrengthsProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`space-y-4 transition-all duration-800 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <ol className="list-decimal pl-6 space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-gray-800">{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default ModelStrengths;
