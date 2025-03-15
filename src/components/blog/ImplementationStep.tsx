
import { ReactNode, useState, useEffect } from 'react';

interface ImplementationStepProps {
  number: number;
  title: string;
  description: string;
  delay?: number;
}

const ImplementationStep = ({ number, title, description, delay = 0 }: ImplementationStepProps) => {
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
        <span className="font-medium">{number}.</span>
        <div>
          <span className="font-medium">{title}</span> {description}
        </div>
      </div>
    </div>
  );
};

export default ImplementationStep;
