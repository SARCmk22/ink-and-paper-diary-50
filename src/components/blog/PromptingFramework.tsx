
import { ReactNode, useState, useEffect } from 'react';

interface PromptingFrameworkProps {
  number: number;
  title: string;
  description: string;
  basicApproach: string;
  advancedTechnique: string;
  delay?: number;
}

const PromptingFramework = ({ 
  number, 
  title, 
  description, 
  basicApproach, 
  advancedTechnique, 
  delay = 0 
}: PromptingFrameworkProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`mb-8 transition-all duration-800 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <h3 className="text-xl font-semibold mb-2">{number}. {title}</h3>
      <p className="mb-3 text-gray-800">{description}</p>
      
      <div className="space-y-2">
        <div>
          <span className="font-medium">Basic approach:</span> "{basicApproach}"
        </div>
        <div>
          <span className="font-medium">Advanced technique:</span> "{advancedTechnique}"
        </div>
      </div>
    </div>
  );
};

export default PromptingFramework;
