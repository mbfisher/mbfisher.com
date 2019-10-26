import React from "react";
import styled from "styled-components";
import { typography, space, TypographyProps, SpaceProps } from "styled-system";

export const Text = styled.p<TypographyProps & SpaceProps>(typography, space);

export const PageTitle = styled(Text).attrs({ as: "h1" })`
  text-align: center;
  margin-bottom: 1em;
`;
