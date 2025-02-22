import React, { ComponentProps } from 'react';

import { action } from '@storybook/addon-actions';

const fireClickAction = action('onLinkClick');

interface StoryLinkWrapperProps {
  to: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export const StoryLinkWrapper = ({
  children,
  href,
  className = '',
  onClick,
  to,
  ...rest
}: StoryLinkWrapperProps & ComponentProps<'a'>) => {
  const modifiedOnClick: React.DOMAttributes<HTMLAnchorElement>['onClick'] = (
    event,
  ) => {
    event.preventDefault();
    if (onClick) {
      onClick(event); // Ensure onClick is defined and pass the event argument
    }
    fireClickAction(href || to);
  };

  return (
    <a
      className={className}
      href={href || to}
      onClick={modifiedOnClick}
      {...rest}
    >
      {children}
    </a>
  );
};
