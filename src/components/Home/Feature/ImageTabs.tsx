import React, { useState } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

interface ImageTabsProps {
  images: string[];
  tabLabels?: string[];
  defaultTab?: number;
}

export default function ImageTabs({ 
  images, 
  tabLabels, 
  defaultTab = 0 
}: ImageTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  // 如果只有一张图片，直接显示图片，不显示Tab
  if (images.length <= 1) {
    return (
      <div className="w-full rounded-md overflow-hidden">
        {images.length === 1 && (
          <Zoom>
            <img 
              src={images[0]} 
              className="w-full h-auto object-cover"
              alt="Feature image" 
            />
          </Zoom>
        )}
      </div>
    );
  }

  // 生成默认的Tab标签
  const getTabLabel = (index: number) => {
    if (tabLabels && tabLabels[index]) {
      return tabLabels[index];
    }
    return `视图 ${index + 1}`;
  };

  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div className="flex border-b border-gray-600 mb-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 text-sm font-medium transition-colors duration-200 relative ${
              activeTab === index
                ? 'text-white border-b-2 border-blue-500'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            {getTabLabel(index)}
            {/* 活跃状态的底部指示条 */}
            {activeTab === index && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 transition-all duration-200" />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="w-full rounded-md overflow-hidden">
        <Zoom>
          <img 
            src={images[activeTab]} 
            className="w-full h-auto object-cover transition-opacity duration-300"
            alt={`Feature image ${activeTab + 1}`}
          />
        </Zoom>
      </div>
    </div>
  );
}