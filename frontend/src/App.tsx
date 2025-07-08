import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Signup from './pages/Signup'
// import Signin from './pages/Signin'
// import Blog from './pages/Blog'
import Auth from './components/Auth'
import './app.css'

export default function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/signup" element={<Auth type="signup" />} />
        <Route path="/signin" element={<Auth type="signin" />} />
        {/* <Route path="/blog/:id" element={<Blog />} /> */}
      </Routes>
    </BrowserRouter>
  )
}
