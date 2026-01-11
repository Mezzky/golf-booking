
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  id?: string;
}

const SectionContainer: React.FC<Props> = ({ children, className = '', id }) => {
  return (
    <section 
      id={id} 
      className={`py-8 md:py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto scroll-mt-28 ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionContainer;