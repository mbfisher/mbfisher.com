import styled from "styled-components";
import {
  layout,
  space,
  LayoutProps,
  SpaceProps,
  typography,
  TypographyProps
} from "styled-system";

export const Box = styled.div<LayoutProps & SpaceProps & TypographyProps>(
  layout,
  space,
  typography
);
