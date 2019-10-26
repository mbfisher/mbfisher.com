import fetch from "isomorphic-unfetch";
import { NextComponentType, NextPageContext } from "next";
import React, { HTMLProps } from "react";
import { Jam } from "./api/jams";
import { Box, BoxProps, PageTitle, Text } from "../style";
import { Page } from "../components/Page";

const CardContainer: React.ComponentType<
  BoxProps & Pick<HTMLProps<HTMLAnchorElement>, "href" | "target">
> = props => <Box as="a" display="block" border="1px solid black" {...props} />;

const JamCard: React.ComponentType<{ jam: Jam }> = ({ jam }) => (
  <CardContainer href={jam.url} target="_blank">
    <img src={jam.image} alt={`${jam.title} by ${jam.artist}`} width="100%" />
    <Box padding="1rem">
      <Text as="h3" mb="0.5rem">
        {jam.title}
      </Text>
      <h5>{jam.artist}</h5>
    </Box>
  </CardContainer>
);

interface JamsPageProps {
  jams: Jam[];
}

const JamsPage: NextComponentType<
  NextPageContext,
  JamsPageProps,
  JamsPageProps
> = ({ jams }) => {
  console.log({ jams });
  return (
    <Page title="Jams">
      <PageTitle>Jams</PageTitle>
      <Text textAlign="center">
        Inspired by{" "}
        <a href="https://www.thisismyjam.com/about" target="_blank">
          thisismyjam.com
        </a>
      </Text>
      <Box width={["100%", "50%", "33%"]} margin="0 auto">
        {jams.map(jam => (
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
    jams
  };
};

export default JamsPage;
