
import { ReactNode, useState, useEffect } from 'react';

interface TechniqueCardProps {
  number: number;
  title: string;
  traditional: string;
  advanced: string;
  impact: string;
  example: ReactNode;
  delay?: number;
}

const TechniqueCard = ({ 
  number, 
  title, 
  traditional, 
  advanced, 
  impact, 
  example,
  delay = 0 
}: TechniqueCardProps) => {
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
        <div className="flex items-center">
          <span className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-full text-sm font-medium">
            {number}
          </span>
          <h3 className="ml-3 text-xl font-semibold">{title}</h3>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="font-medium">Traditional approach:</div>
            <p className="text-gray-700">{traditional}</p>
          </div>
          <div className="space-y-2">
            <div className="font-medium">Advanced technique:</div>
            <p className="text-gray-700">{advanced}</p>
          </div>
        </div>
        
        <div className="pt-2">
          <div className="font-medium">Business impact:</div>
          <p className="text-gray-700">{impact}</p>
        </div>
        
        <div className="pt-2">
          <div className="font-medium">Implementation example:</div>
          <div className="mt-2 p-4 bg-gray-50 border border-gray-200 rounded text-sm">
            {example}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechniqueCard;
