import React from "react";
import Head from "next/head";

export const Page: React.ComponentType<{ title: string }> = ({
  title,
  children
}) => (
  <>
    <Head>
      <title>{title} - mbfisher.com</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="apple-touch-icon" href="/icon.png" />
      <meta name="apple-mobile-web-app-title" content="mbfisher" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />
    </Head>
    {children}
  </>
);
