
import { ReactNode, useState, useEffect } from 'react';

interface BusinessCaseProps {
  industry: string;
  description: string;
  metrics: { label: string; value: string }[];
  delay?: number;
}

const BusinessCase = ({ industry, description, metrics, delay = 0 }: BusinessCaseProps) => {
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
      <h3 className="text-xl font-semibold mb-2 gold-text">{industry}</h3>
      <p className="mb-4">{description}</p>
      <div className="flex flex-wrap gap-3">
        {metrics.map((metric, index) => (
          <div key={index} className="inline-flex items-center bg-gray-100 rounded-full px-4 py-2">
            <span className="font-bold mr-2 gold-text">{metric.value}</span>
            <span className="text-gray-700">{metric.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessCase;
