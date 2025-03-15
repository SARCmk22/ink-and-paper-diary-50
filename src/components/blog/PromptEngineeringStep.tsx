
import { ReactNode, useState, useEffect } from 'react';

interface PromptEngineeringStepProps {
  number: number;
  title: string;
  description: string;
  delay?: number;
}

const PromptEngineeringStep = ({ number, title, description, delay = 0 }: PromptEngineeringStepProps) => {
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
      <h3 className="text-xl font-semibold mb-2 flex items-center">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white mr-3 text-sm">
          {number}
        </span>
        <span className="gold-text">{title}</span>
      </h3>
      <p className="text-gray-800 ml-11">{description}</p>
    </div>
  );
};

export default PromptEngineeringStep;
