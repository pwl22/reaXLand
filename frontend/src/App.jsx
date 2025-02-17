import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Problem from './pages/Problem'
import Solution from './pages/Solution'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Problem />} />
          <Route path="/problem" element={<Problem />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

export default App