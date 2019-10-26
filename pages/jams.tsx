import fetch from "isomorphic-unfetch";
import { NextComponentType, NextPageContext } from "next";
import React from "react";
import styled, { DefaultTheme } from "styled-components";
import { Page } from "../components/Page";
import { Box, createTheme, Text, random } from "../style";
import { Anchor } from "../style/Link";
import { Jam } from "./api/jams";

const CardContainer = styled(Anchor)`
  display: block;
  background-color: ${props => random(props.theme.colors)};
  color: white;
`;

const JamCard: React.ComponentType<{ jam: Jam }> = ({ jam }) => {
  return (
    <CardContainer href={jam.url} target="_blank">
      <img src={jam.image} alt={`${jam.title} by ${jam.artist}`} width="100%" />
      <Box padding="1rem">
        <Text as="h3" mb="0.5rem">
          {jam.title}
        </Text>
        <Text as="h5">{jam.artist}</Text>
      </Box>
    </CardContainer>
  );
};

interface JamsPageProps {
  jams: Jam[];
  theme: DefaultTheme;
}

const JamsPage: NextComponentType<
  NextPageContext,
  JamsPageProps,
  JamsPageProps
> = ({ jams, theme }) => {
  console.log({ jams });
  return (
    <Page title="Jams" theme={theme}>
      <Text textAlign="center" color={theme.colors[1]}>
        Inspired by{" "}
        <Anchor href="https://www.thisismyjam.com/about" target="_blank">
          thisismyjam.com
        </Anchor>
      </Text>
      <Box width={["100%", "50%", "33%"]} margin="0 auto">
        {jams.map((jam, i) => (
          <JamCard key={jam.url} jam={jam} />
        ))}
      </Box>
    </Page>
  );
};

JamsPage.getInitialProps = async () => {
  const url = `${process.env.API_BASE_URL}/api/jams`;
  console.log("Fetching jams from", url);
  const res = await fetch(url);
  const jams = await res.json();

  return {
    jams,
    theme: createTheme()
  };
};

export default JamsPage;
