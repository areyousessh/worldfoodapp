import { Router } from '@routes/index'
import { ThemeProvider } from '@theme/useTheme'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export function App() {

  const queryClient = new QueryClient()
  
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
          <Router />
      </ThemeProvider>
    </QueryClientProvider>
  )
}