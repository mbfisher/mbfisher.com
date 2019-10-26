import { NextComponentType, NextPageContext } from "next";
import React from "react";
import styled, { DefaultTheme } from "styled-components";
import { Page } from "../components/Page";
import { Box, createTheme } from "../style";
import { Link } from "../style/Link";

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
  margin-bottom: 2rem;
`;

const NavLink = styled(Link)`
  text-decoration: underline;
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
            <NavLink
              href="/jams"
              style={{ color: theme.colors[1], fontSize: "1.75em" }}
            >
              Jams
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink
              href="/travel"
              style={{
                color: theme.colors[2],
                fontSize: "1.25em",
                fontStyle: "italic"
              }}
            >
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
