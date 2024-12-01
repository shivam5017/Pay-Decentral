import React from 'react';

interface FeatureCardProps {
  id: string;
  title: string;
  description: string;
  status: 'live' | 'under-maintenance' | 'coming-soon';
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  id,
  title,
  description,
  status = 'coming-soon',
}) => {
  const statusStyles = {
    live: 'bg-green-500 text-white',
    'under-maintenance': 'bg-yellow-500 text-white',
    'coming-soon': 'bg-gray-500 text-white',
  };

  return (
    <div className="relative flex flex-col items-center text-center p-6 rounded-lg shadow-xl bg-gradient-to-r from-purple-700 via-purple-800 to-indigo-900 hover:scale-105 hover:border-4 hover:border-gradient-to-r hover:from-purple-500 hover:to-teal-500 transition-all duration-300 ease-in-out">
      
      {/* Icon */}
      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full flex items-center justify-center mb-4">
        <span className="text-2xl font-semibold">{id}</span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>

      {/* Description */}
      <p className="text-white mb-4 text-sm sm:text-base leading-relaxed">
        {description}
      </p>

      {/* Status Badge */}
      <div className="w-full flex justify-between mt-auto">
        <div
          className={`px-4 py-1 rounded-full text-sm font-medium ${statusStyles[status]}`}
        >
          {status === 'live' && 'Live'}
          {status === 'under-maintenance' && 'Under Maintenance'}
          {status === 'coming-soon' && 'Coming Soon'}
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-600 to-teal-500 opacity-30 rounded-lg"></div>
    </div>
  );
};

export default FeatureCard;
