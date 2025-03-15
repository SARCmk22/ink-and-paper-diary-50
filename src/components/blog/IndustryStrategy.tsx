
import { ReactNode, useState, useEffect } from 'react';

interface IndustryStrategyProps {
  title: string;
  strategies: string[];
  delay?: number;
}

const IndustryStrategy = ({ title, strategies, delay = 0 }: IndustryStrategyProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`mb-6 transition-all duration-800 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <ul className="list-disc pl-6 space-y-1">
        {strategies.map((strategy, index) => (
          <li key={index} className="text-gray-800">{strategy}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndustryStrategy;
