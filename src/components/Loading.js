'use client';

import { useState, useEffect } from 'react';

const Loading = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm transition-opacity duration-300">
      <div className="relative">
        {/* Outer spinning ring */}
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-blue-600 border-b-blue-600"></div>
        
        {/* Middle pulsating ring */}
        <div className="absolute inset-2 animate-pulse rounded-full border-4 border-blue-500/50"></div>
        
        {/* Inner spinning dot */}
        <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600 animate-bounce">
          <div className="h-full w-full animate-ping-slow rounded-full bg-blue-500/30"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;