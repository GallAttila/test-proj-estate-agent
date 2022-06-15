import CssBaseline from '@mui/material/CssBaseline'
import MuiThemeProvider from 'config/MuiThemeProvider'
import ReduxStoreProvider from 'config/ReduxStoreProvider'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MuiThemeProvider>
      <CssBaseline />
      <ReduxStoreProvider>
        <Component {...pageProps} />
      </ReduxStoreProvider>
    </MuiThemeProvider>
  )
}

export default MyApp
