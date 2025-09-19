import React, { useState, useEffect } from 'react';

interface DayCounterProps {
  startDate: string; // ISO date string format: "2023-01-01"
  label?: string;
  className?: string;
}

export default function DayCounter({ 
  startDate, 
  label = "已持续", 
  className = "" 
}: DayCounterProps) {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const calculateDays = () => {
      const start = new Date(startDate);
      const now = new Date();
      const diffTime = now.getTime() - start.getTime();
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      setDays(diffDays);
    };

    // 初始计算
    calculateDays();

    // 每小时更新一次（避免频繁更新，但保持准确性）
    const interval = setInterval(calculateDays, 1000 * 60 * 60);

    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-gray-300">{label}</span>
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-bold text-green-400">{days}</span>
        <span className="text-sm text-gray-400">天</span>
      </div>
    </div>
  );
}