import NextLink, { LinkProps } from "next/link";
import React, { HTMLProps } from "react";
import styled from "styled-components";
import {
  space,
  SpaceProps,
  TypographyProps,
  typography,
  ColorProps,
  color
} from "styled-system";
import { random } from ".";

type AnchorProps = SpaceProps & TypographyProps & ColorProps;
export const Anchor = styled.a<AnchorProps>`
  color: ${props => random(props.theme.colors)};
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
  ${space}
  ${typography}
  ${color}
` as React.ComponentType<
  AnchorProps & { href?: string; target?: string; className?: string }
>;

export const Link: React.ComponentType<
  LinkProps & { style?: AnchorProps; className?: string }
> = ({ children, href, style = {}, className, ...props }) => (
  <NextLink href={href} passHref {...props}>
    <Anchor {...style} className={className}>
      {children}
    </Anchor>
  </NextLink>
);
