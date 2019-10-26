import styled from "styled-components";
import {
  layout,
  space,
  LayoutProps,
  SpaceProps,
  typography,
  TypographyProps,
  border,
  BorderProps,
  color,
  ColorProps
} from "styled-system";

export type BoxProps = LayoutProps &
  SpaceProps &
  TypographyProps &
  BorderProps &
  ColorProps;
export const Box = styled.div<BoxProps>(
  layout,
  space,
  typography,
  border,
  color
);
