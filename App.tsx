import { ThemeProvider } from 'styled-components'
import { AppRouter } from './src/routes/index.routes'
import { theme } from 'theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  )
}
