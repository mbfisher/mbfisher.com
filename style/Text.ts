import * as CSS from "csstype";
import styled from "styled-components";
import {
  color,
  ColorProps,
  ResponsiveValue,
  space,
  SpaceProps,
  system,
  TLengthStyledSystem,
  typography,
  TypographyProps
} from "styled-system";

type TextProps = TypographyProps &
  SpaceProps &
  ColorProps & {
    textDecoration?: ResponsiveValue<
      CSS.TextDecorationProperty<TLengthStyledSystem>
    >;
  };

export const Text = styled.p<TextProps>(
  typography,
  space,
  color,
  system({ textDecoration: true })
);

export const PageTitle = styled(Text).attrs({ as: "h1" })<ColorProps>`
  text-align: center;
  margin-bottom: 1rem;
  ${color}
`;
