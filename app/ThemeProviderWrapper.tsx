'use client'
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"

const defaultTheme = createTheme()

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: '#0f1116',
      paper: '#171920'
    },
    primary: {
      main: '#a7adb9'
    },
    text: {
      primary: '#f6f7fb',
      secondary: '#dcb8af'
    }
  },
  shape: {
    borderRadius: 10
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#101218',
          borderBottom: '1px solid #1f2330',
          boxShadow: 'none'
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#e7e9ef'
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: '#e7e9ef'
        }
      }
    },
  },
  typography: {
    
    h1: {
      [defaultTheme.breakpoints.up('xs')]: {
        fontSize: '3rem',
      },
      [defaultTheme.breakpoints.up('lg')]: {
        fontSize: '4rem',
      },
      [defaultTheme.breakpoints.up('xl')]: {
        fontSize: '6rem'
      },
    },
    h2: {
       [defaultTheme.breakpoints.up('xs')]: {
        fontSize: '1.50rem',
      },
      [defaultTheme.breakpoints.up('lg')]: {
        fontSize: '1.75rem',
      },
      [defaultTheme.breakpoints.up('xl')]: {
        fontSize: '3.75rem',
      },
    },
  },
})

const ThemeProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
export default ThemeProviderWrapper