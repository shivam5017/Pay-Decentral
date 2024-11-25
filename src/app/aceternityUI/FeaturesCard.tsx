import React from 'react';

interface FeatureCardProps {
    id:string;
  title: string;
  description: string;
  status: 'live' | 'under-maintenance' | 'coming-soon'; 
}

const FeatureCard:React.FC<FeatureCardProps> = ({ id,title, description, status = 'coming-soon' }) => {
    const statusStyles = {
      'live': 'bg-green-500 text-green-900',
      'under-maintenance': 'bg-yellow-500 text-yellow-900',
      'coming-soon': 'bg-gray-500 text-gray-900',
    };
  
    return (
      <div className="flex flex-col items-center text-center bg-gray-600 p-6 rounded-lg shadow-lg">
        <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center mb-4">
          <span className="text-2xl font-bold">{id}</span>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-white mb-4">{description}</p>
  
        
        <div className={`px-4 py-1 rounded-full text-sm font-semibold ${statusStyles[status]}`}>
          {status === 'live' && 'Live'}
          {status === 'under-maintenance' && 'Under Maintenance'}
          {status === 'coming-soon' && 'Coming Soon'}
        </div>
      </div>
    );
  };
  



export default FeatureCard;
