import { NextApiRequest, NextApiResponse } from "next";
import fetch from "isomorphic-unfetch";
import { readFileSync } from "fs";
import write from "write";
import { getMetadata } from "page-metadata-parser";
import domino from "domino";
import { Status } from "twitter-d";

async function getBearerToken(): Promise<string> {
  const auth = new Buffer(
    `${process.env.TWITTER_CONSUMER_KEY}:${process.env.TWITTER_CONSUMER_SECRET}`
  ).toString("base64");
  const res = await fetch("https://api.twitter.com/oauth2/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
    body: "grant_type=client_credentials"
  });
  const data = await res.json();
  return data.access_token;
}

async function getTweets(): Promise<Status[]> {
  const token = await getBearerToken();
  const query = "#thisismyjam from:@_mbfisher";
  const url = `https://api.twitter.com/1.1/search/tweets.json?q=${encodeURIComponent(
    query
  )}`;
  console.log({ url });
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  const data = await res.json();
  return data.statuses;
}

export interface Jam {
  title: string;
  artist: string;
  image: string;
  url: string;
}

export async function getJams(): Promise<Jam[]> {
  let tweets: any[];

  try {
    const data = readFileSync("/tmp/tweets.json");
    console.log("Got tweets from cache");
    tweets = JSON.parse(data.toString());
  } catch (error) {
    console.log("No tweets cache", error);
    tweets = await getTweets();
    console.log("Updating tweets cache");
    write.sync("/tmp/tweets.json", JSON.stringify(tweets));
  }

  return Promise.all(
    tweets.map(async tweet => {
      const url = tweet.entities.urls[0].expanded_url;
      const response = await fetch(url);
      const html = await response.text();
      const doc = domino.createWindow(html).document;
      const metadata = getMetadata(doc, url);

      // Water No Get Enemy, a song by Fela Kuti on Spotify
      const details = metadata.description.split(",");
      const title = details[0];
      const artist = details[1]
        .replace(" a song by ", "")
        .replace(" on Spotify", "");

      return { title, artist, image: metadata.image, url };
    })
  );
}

export default async function jamsApi(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const jams = await getJams();
  res.json(jams);
}
