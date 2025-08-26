import React from 'react';

interface Props {
  color: string;
}

const ColorBox: React.FC<Props> = ({ color }) => {
  return (
    <div 
      className="w-36 h-36 rounded-lg border border-gray-300 shadow-md"
      style={{ backgroundColor: color }}
    ></div>
  );
};

export default ColorBox;