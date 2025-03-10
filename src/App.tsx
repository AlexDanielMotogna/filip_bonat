import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/scss/main.scss'

import AppProviders from './components/wrappers/AppProviders'
import AppRouter from './routes/router'

function App() {
  return (
    <>
      <AppProviders>
        <AppRouter />
      </AppProviders>
    </>
  )
}

export default App
