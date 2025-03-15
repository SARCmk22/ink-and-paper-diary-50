
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
      <h3 className="text-xl font-semibold mb-2">{number}. {title}</h3>
      <p className="text-gray-800">{description}</p>
    </div>
  );
};

export default PromptEngineeringStep;
