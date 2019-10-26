import NextLink, { LinkProps } from "next/link";
import React from "react";
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
import { random } from ".";

type AnchorProps = SpaceProps;
export const Anchor = styled.a<AnchorProps>`
  color: ${props => random(props.theme.colors)};
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
  ${space}
`;

export const Link: React.ComponentType<LinkProps & { style?: AnchorProps }> = ({
  children,
  href,
  style = {},
  ...props
}) => (
  <NextLink href={href} passHref {...props}>
    <Anchor {...style}>{children}</Anchor>
  </NextLink>
);
