import './App.css'
import { TranslationProvider } from './context/TranslationProvider';
import { AppRouter } from './routes/AppRouter';

function App() {

  return (
    <>
      <TranslationProvider>
        <AppRouter />
      </TranslationProvider>
    </>
  )
}

export default App
