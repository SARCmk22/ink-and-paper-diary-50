
import { ReactNode, useState, useEffect } from 'react';

interface ModelStrengthsProps {
  title: string;
  items: string[];
  delay?: number;
  ordered?: boolean;
}

const ModelStrengths = ({ title, items, delay = 0, ordered = true }: ModelStrengthsProps) => {
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
      {ordered ? (
        <ol className="list-decimal pl-6 space-y-2">
          {items.map((item, index) => (
            <li key={index} className="text-gray-800">{item}</li>
          ))}
        </ol>
      ) : (
        <ul className="list-disc pl-6 space-y-2">
          {items.map((item, index) => (
            <li key={index} className="text-gray-800">{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ModelStrengths;
