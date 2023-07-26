import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";

// 2. Extend the theme to include custom colors, fonts, etc
const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "gray.800",
        color: "white",
      },
      // styles for the `a`
      a: {
        color: "teal.500",
        _hover: {
          textDecoration: "underline",
        },
      },
    },
  },
});

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </Provider>
);
