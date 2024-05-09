// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DefaultTheme } from 'styled-components/native'
import { theme } from 'theme'

// modificando/sobreescrevendo/acrestando as minhas tipagens no defaultTheme
declare module 'styled-components/native' {
  // o typeof copia toda a tipagem;
  type ThemeType = typeof theme

  export interface DefaultTheme extends ThemeType {}
}
