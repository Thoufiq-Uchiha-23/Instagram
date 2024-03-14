import App from './App.jsx'


import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'

// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools"
import { BrowserRouter } from 'react-router-dom'


// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}


const styles = {
  global: (props) => ({
    body: {
      bg: mode("gray.100", "#000")(props),
      color: mode("gray.800", "whiteAlpha.900")(props),
    },
  }),
};



const theme = extendTheme({ colors, styles });

// 3. Pass the `theme` prop to the `ChakraProvider`

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
);