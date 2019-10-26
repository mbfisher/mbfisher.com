import { NextComponentType, NextPageContext } from "next";
import React from "react";
import styled, { DefaultTheme } from "styled-components";
import { typography, TypographyProps } from "styled-system";
import { Page } from "../components/Page";
import { Box, createTheme, PageTitle } from "../style";

const NavContainer = props => (
  <Box
    as="nav"
    width={["100%", "50%", "33%"]}
    margin="0 auto"
    textAlign="center"
    {...props}
  />
);

const NavListItem = styled.li`
  list-style: none;
  margin-bottom: 3rem;
`;

const NavLink = styled.a<{ i: number } & TypographyProps>`
  color: ${props => props.theme.colors[props.i]};
  ${typography}
`;

interface HomePageProps {
  theme: DefaultTheme;
}

const HomePage: NextComponentType<
  NextPageContext,
  HomePageProps,
  HomePageProps
> = ({ theme }) => {
  return (
    <Page title="mbfisher.com" theme={theme}>
      <NavContainer>
        <ul>
          <NavListItem>
            <NavLink i={1} href="/jams" fontSize="1.75em">
              Jams
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink i={2} href="/travel" fontSize="1.25em" fontStyle="italic">
              Travel
            </NavLink>
          </NavListItem>
        </ul>
      </NavContainer>
    </Page>
  );
};

HomePage.getInitialProps = () => ({
  theme: createTheme()
});

export default HomePage;
