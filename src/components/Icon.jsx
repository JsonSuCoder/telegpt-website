import React from 'react';
const Icon = ({ component, size = 16, className = '' }) => {
  const SvgComponent = component;
  return (
    <SvgComponent
      width={size}
      height={size}
      className={className}
    />
  );
};

export default Icon;
