import React, { forwardRef, HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>(({
  children,
  title,
  className = '',
  ...props
}, ref) => {
  return (
    <div 
      ref={ref}
      className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}
      {...props}
    >
      {title && (
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
      )}
      <div className="p-6">{children}</div>
    </div>
  );
});

Card.displayName = 'Card';

export default Card;