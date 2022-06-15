import { FC, ReactNode } from 'react'
import {
  ThemeProvider,
  createTheme,
  ThemeOptions,
} from '@mui/material/styles'

interface CustomeThemeOptions extends ThemeOptions {
  common?: {
    darkGrey?: string
  }
}

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      dark: '#022473',
      main: '#3365DD',
      light: '#0B74C1',
    },
    common: {
      darkGrey: '#1A1A1A',
    },
  },
} as CustomeThemeOptions)

const MuiThemProvider: FC<{ children: ReactNode }> = props => {
  return (
    <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
  )
}

export default MuiThemProvider
