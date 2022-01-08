import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode('#ffffff', "#0E141B")(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderLineOffset: 6,
        textDecorationColor: "#000000",
        textDecorationThickness: 4,
        marginTop: 3,
        margintBottom: 4,
      },
    },
  },
  Text: {
    variants: {
      "paragraph": {
        textIndent: "1em",
        textAlign: "justify"
      },
    },
  },
  Image: {
    variants: {
      "card": {
        filter: "grayscale(100%)"
      }
    }
  },
  Link: {
    baseStyle: (props) => ({
      color: mode("#000", "#000")(props),
      textDecorationOffset: 3,
    }),
  },
};

const fonts = {
  heading: 'Poppins',
  body: 'Poppins'
};

const colors = {
  furyRed: "#D9291C",
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts,
});

export default theme;
