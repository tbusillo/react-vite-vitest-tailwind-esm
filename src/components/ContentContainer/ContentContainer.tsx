import React from 'react';
import classNames from 'classnames';

type ContentContainerProps = {
  className?: string;
  children?: React.ReactNode;
};

const ContentContainer = ({ className, children }: ContentContainerProps) => {
  return (
    <>
      <div className='mx-auto max-w-7xl dark:bg-gray-900 sm:px-6 lg:px-12'>
        {children}
      </div>
    </>
  );
};

ContentContainer.displayName = 'ContentContainer';

export default ContentContainer;
