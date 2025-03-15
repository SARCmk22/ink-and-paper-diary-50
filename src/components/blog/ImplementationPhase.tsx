
import { ReactNode, useState, useEffect } from 'react';

interface ImplementationPhaseProps {
  title: string;
  days: string;
  tasks: string[];
  delay?: number;
}

const ImplementationPhase = ({ title, days, tasks, delay = 0 }: ImplementationPhaseProps) => {
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
      <div className="border-l-4 gold-border pl-4 mb-6">
        <h3 className="text-xl font-semibold gold-text">{days}: {title}</h3>
        <ul className="mt-3 space-y-2">
          {tasks.map((task, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-block w-4 h-4 rounded-full bg-black flex-shrink-0 mr-2 mt-1"></span>
              <span>{task}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ImplementationPhase;
