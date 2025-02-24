import React, { ComponentProps, forwardRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { darken } from 'polished';

import { Icon } from '../Icon';
import { color } from '../shared/styles';

export interface StyledLinkProps {
  containsIcon?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  nochrome?: boolean;
  inverse?: boolean;
}

export type LinkProps = React.ComponentProps<typeof StyledLink> & {
  withArrow?: boolean;
  isButton?: boolean;
  LinkWrapper?: React.ComponentType<any>;
};

const LinkInner = styled.span<{ withArrow: boolean }>`
  ${(props) =>
    props.withArrow &&
    css`
      > svg:last-of-type {
        height: 0.65em;
        width: 0.65em;
        margin-right: 0;
        margin-left: 0.25em;
        bottom: auto;
        vertical-align: inherit;
      }
    `};
`;

const StyledLink = styled.a<StyledLinkProps>`
  display: inline-block;
  transition:
    transform 150ms ease-out,
    color 150ms ease-out;
  text-decoration: none;

  color: ${color.secondary};

  &:hover,
  &:focus {
    cursor: pointer;
    transform: translateY(-1px);
    color: ${darken(0.07, color.secondary)};
  }
  &:active {
    transform: translateY(0);
    color: ${darken(0.1, color.secondary)};
  }

  svg {
    display: inline-block;
    height: 1em;
    width: 1em;
    vertical-align: text-top;
    position: relative;
    bottom: -0.125em;
    margin-right: 0.4em;
  }

  ${(props) =>
    props.containsIcon &&
    css`
      svg {
        height: 1em;
        width: 1em;
        vertical-align: middle;
        position: relative;
        bottom: 0;
        margin-right: 0;
      }
    `};

  ${(props) =>
    props.secondary &&
    css`
      color: ${color.mediumdark};

      &:hover {
        color: ${color.dark};
      }

      &:active {
        color: ${color.darker};
      }
    `};

  ${(props) =>
    props.tertiary &&
    css`
      color: ${color.dark};

      &:hover {
        color: ${color.darkest};
      }

      &:active {
        color: ${color.mediumdark};
      }
    `};

  ${(props) =>
    props.nochrome &&
    css`
      color: inherit;

      &:hover,
      &:active {
        color: inherit;
        text-decoration: underline;
      }
    `};

  ${(props) =>
    props.inverse &&
    css`
      color: ${color.lightest};

      &:hover {
        color: ${color.lighter};
      }

      &:active {
        color: ${color.light};
      }
    `};
`;
const LinkButton = styled.button`
  /* reset button styles */
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

const UnstyledLink = styled.a``;

const LinkSelector = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  LinkProps
>(
  (
    {
      containsIcon,
      inverse,
      isButton,
      LinkWrapper,
      nochrome,
      secondary,
      tertiary,
      ...rest
    }: LinkProps,
    ref,
  ) => {
    if (isButton) {
      return (
        <LinkButton
          {...(rest as any)}
          ref={ref as React.ForwardedRef<HTMLButtonElement>}
        />
      );
    } else if (LinkWrapper) {
      return <LinkWrapper {...rest} ref={ref} />;
    }

    return (
      <UnstyledLink
        {...rest}
        ref={ref as React.ForwardedRef<HTMLAnchorElement>}
      />
    );
  },
);

/**
 * Links can contains text and/or icons. Be careful using only icons, you must provide a text alternative via aria-label for accessibility.
 */
export const Link = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  LinkProps & ComponentProps<typeof StyledLink>
>(({ children, withArrow = false, ...rest }, ref) => {
  const content = (
    <>
      <LinkInner withArrow={withArrow}>
        {children}
        {withArrow && <Icon icon='arrowright' />}
      </LinkInner>
    </>
  );

  return (
    <StyledLink
      as={LinkSelector}
      ref={ref as React.ForwardedRef<HTMLAnchorElement>}
      {...rest}
    >
      {content}
    </StyledLink>
  );
});
