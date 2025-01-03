import { ThemeProvider } from 'styled-components'
import { AppRouter } from './src/routes/index.routes'
import { theme } from 'theme'
import { AuthProvider } from 'contexts/AuthContext'

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </AuthProvider>
  )
}
