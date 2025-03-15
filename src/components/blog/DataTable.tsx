
import { ReactNode, useState, useEffect } from 'react';

interface DataTableProps {
  headers: string[];
  rows: string[][];
  delay?: number;
}

const DataTable = ({ headers, rows, delay = 0 }: DataTableProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`my-6 overflow-x-auto transition-all duration-800 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-black text-white">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="py-3 px-4 text-left text-sm font-medium">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className={`py-3 px-4 text-sm ${cellIndex === 1 ? 'gold-text font-bold' : ''}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
