import Head from 'next/head'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto;
    background: url("https://projectplusgame.com/_next/static/images/mosaic-background-pattern-150-8dae7e6a75bcb4631389737c0caa0777.jpg");
  }
  input, button {
    font-family: Roboto;
  }
`

const theme = {
  colors: {
    primary: '#6200EE',
    secondary: '#03DAC6',
    mainBg: "#171B35",
    contrastText: "#FFFFFF",
    wrong: "#FF5722",
    success: "#4CAF50"
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" /> 
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
