
import { ReactNode, useState, useEffect } from 'react';

interface AIToolCardProps {
  title: string;
  roi: string;
  complexity: string;
  benefit: string;
  delay?: number;
}

const AIToolCard = ({ title, roi, complexity, benefit, delay = 0 }: AIToolCardProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`mb-4 transition-all duration-800 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="border border-gray-200 rounded-lg p-5 bg-white shadow-sm">
        <h4 className="text-lg font-semibold mb-3">{title}</h4>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="inline-block w-5 h-5 rounded-full gold-bg flex-shrink-0 mr-2 mt-1"></span>
            <span>Average ROI: <strong className="gold-text">{roi}</strong></span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-5 h-5 rounded-full gold-bg flex-shrink-0 mr-2 mt-1"></span>
            <span>Implementation complexity: <strong>{complexity}</strong></span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-5 h-5 rounded-full gold-bg flex-shrink-0 mr-2 mt-1"></span>
            <span>Key benefit: <strong>{benefit}</strong></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AIToolCard;
