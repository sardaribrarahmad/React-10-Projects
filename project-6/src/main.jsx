import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//import  { ChakraProvider } from '@chakra-ui/react';
import "@fontsource/ubuntu"; // Defaults to weight 400
import { theme } from "./theme/index.js";
import { ChakraProvider } from '@chakra-ui/react';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
