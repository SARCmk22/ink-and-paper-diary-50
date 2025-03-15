
import { ReactNode, useState, useEffect } from 'react';

interface ImplementationStepProps {
  number: number;
  title: string;
  description: string;
  delay?: number;
  numbered?: boolean;
}

const ImplementationStep = ({ number, title, description, delay = 0, numbered = true }: ImplementationStepProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`mb-3 transition-all duration-800 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="flex gap-2">
        {numbered ? (
          <span className="font-medium">{number}.</span>
        ) : (
          <span className="text-lg">•</span>
        )}
        <div>
          <span className="font-medium">{title}</span> {description}
        </div>
      </div>
    </div>
  );
};

export default ImplementationStep;
