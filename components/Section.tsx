import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  diagonal?: 'bottom' | 'top' | 'both' | 'none';
  ariaLabelledby?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  diagonal = 'none',
  ariaLabelledby
}) => {
  let clipClass = '';
  if (diagonal === 'bottom') clipClass = 'clip-diagonal-bottom pb-24';
  if (diagonal === 'top') clipClass = 'clip-diagonal-top pt-24';
  if (diagonal === 'both') clipClass = 'clip-diagonal-both py-24';

  return (
    <section
      id={id}
      className={`relative ${clipClass} ${className}`}
      aria-labelledby={ariaLabelledby}
    >
      {children}
    </section>
  );
};
