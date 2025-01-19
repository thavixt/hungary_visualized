// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { persistQueryClient } from '@tanstack/react-query-persist-client'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: Infinity,
    },
  },
})

const localStoragePersister = createSyncStoragePersister({
  storage: window.localStorage,
})
// const sessionStoragePersister = createSyncStoragePersister({ storage: window.sessionStorage })

// https://tanstack.com/query/latest/docs/framework/react/plugins/persistQueryClient
persistQueryClient({
  queryClient,
  persister: localStoragePersister,
})

createRoot(document.getElementById('root')!).render(
  // TODO: strict mode disabled to avoid spam...
  // <StrictMode>
    <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
  // </StrictMode>,
)
