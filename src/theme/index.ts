import { extendTheme } from "@chakra-ui/react";

const fontStack = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`;

export default extendTheme({
  fonts: {
    heading: fontStack,
    body: fontStack,
    mono: `SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
  },
  styles: {
    global: {
      "html, body": {
        bg: "#ffffff",
        color: "#6b6b6b",
        fontFamily: fontStack,
      },
      "h1, h2, h3, h4, h5, h6": {
        color: "#1a1a1a",
      },
      p: {
        color: "#6b6b6b",
      },
    },
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});
