import React from "react";
import{BrowserRouter} from "react-router-dom"
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import {Auth0Provider} from "@auth0/auth0-react"
import App from "./App.jsx";
import "./index.css";


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


const domain = "dev-bxpe0ijwah5nt30j.us.auth0.com";
const clientId = "VuHR4qCsqRZdJVO0Ipb6IF3Gk2SensWO";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  
    <Auth0Provider domain={domain} clientId={clientId} redirectUri="http://localhost:5173/votations">
      <ChakraProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ChakraProvider>
    </Auth0Provider>
  
);
