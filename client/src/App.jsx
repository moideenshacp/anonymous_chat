import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Join from './components/Join'
import Chat from './components/Chat'
import './index.css'



function App() {
return(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Join/>} />
    <Route path='/chat' element={<Chat/>} />
  </Routes>
  </BrowserRouter>
)
}

export default App
