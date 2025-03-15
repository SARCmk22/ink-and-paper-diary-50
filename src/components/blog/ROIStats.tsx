
import { ReactNode, useState, useEffect } from 'react';

interface ROIStatsProps {
  title: string;
  stats: { label: string; value: string }[];
  delay?: number;
}

const ROIStats = ({ title, stats, delay = 0 }: ROIStatsProps) => {
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
      {title && <h4 className="text-lg font-semibold mb-4">{title}</h4>}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
            <div className="text-2xl font-bold gold-text mb-1">{stat.value}</div>
            <div className="text-gray-700">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ROIStats;
