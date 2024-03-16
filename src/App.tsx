import {Router} from '@routes/index'
import { ThemeProvider } from '@theme/useTheme'

export function App() {
  
  return (
    <ThemeProvider>
        <Router />
    </ThemeProvider>
  )
}