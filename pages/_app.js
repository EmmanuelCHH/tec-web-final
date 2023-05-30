import '@/styles/globals.css'
import '@/components/M.css'
import '@/styles/T.css'
import '@/components/Foro.css'
import '@/components/chat.css'
import '@/styles/Calendario.css'
import '@/components/Ma.css'
import { AuthProvider } from '@/context/AuthContext'

export default function App({ Component, pageProps }) {
  return(
  <AuthProvider>
   <Component {...pageProps} />
  </AuthProvider>
  )
}
