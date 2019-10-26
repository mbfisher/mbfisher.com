import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { Box, PageTitle } from "../style";
import { Link } from "../style/Link";

export const Page: React.ComponentType<{
  title: string;
  theme: DefaultTheme;
}> = ({ title, theme, children }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title} - mbfisher.com</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-title" content="mbfisher" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
      </Head>
      <ThemeProvider theme={theme}>
        <>
          <Box textAlign="center" mt="1rem">
            <PageTitle color={theme.colors[0]}>{title}</PageTitle>
            {router.asPath !== "/" && (
              <Link href="/" passHref style={{ mb: "1rem" }}>
                Home
              </Link>
            )}
          </Box>
          {children}
        </>
      </ThemeProvider>
    </>
  );
};
