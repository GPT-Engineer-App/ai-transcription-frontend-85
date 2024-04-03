import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    gray: {
      50: "#f2f2f2",
      100: "#f7fafc",

      800: "#1A202C",
      900: "#171923",
    },
  },
  styles: {
    global: {
      body: {
        bg: "gray.800",
      },
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  components: {
    Table: {
      baseStyle: {
        th: {
          color: "white",
        },
      },
    },
    Table: {
      baseStyle: {
        th: {
          color: "white",
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
