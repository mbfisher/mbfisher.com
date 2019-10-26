import React from "react";
import { Box } from "../style";
import styled from "styled-components";
import { Page } from "../components/Page";

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

const HomePage = () => {
  return (
    <Page title="mbfisher.com">
      <h1 style={{ textAlign: "center" }}>mbfisher.com</h1>
      <NavContainer>
        <ul style={{ paddingInlineStart: 0 }}>
          <NavListItem>
            <a
              href="/jams"
              style={{
                color: "#FD6FFF",
                fontSize: "2.5rem",
                fontStyle: "italic"
              }}
            >
              Jams
            </a>
          </NavListItem>
          <NavListItem>
            <a
              href="/travel"
              style={{
                color: "#81FCED",
                fontSize: "1.75rem",
                textDecoration: "underline"
              }}
            >
              Travel
            </a>
          </NavListItem>
        </ul>
      </NavContainer>
    </Page>
  );
};

export default HomePage;
