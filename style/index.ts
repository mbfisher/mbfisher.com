export * from "./Box";
export * from "./Text";

import palettes from "nice-color-palettes";
import { DefaultTheme } from "styled-components";

export function random<T>(items: T[]): T {
  return items[Math.floor(Math.random() * (items.length - 1))];
}

function shuffle<T>(a: T[]): T[] {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// const colors = random(palettes);
const colors = ["#FD6FFF", "#81FCED", "#6FFFB0", "#FFCA58", "#7D4CDB"];

export const createTheme: () => DefaultTheme = () => {
  return {
    colors: shuffle([...colors])
  };
};
