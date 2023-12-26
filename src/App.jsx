import { Route,Routes } from 'react-router-dom'
import Apple from './Components/Apple'
import Business from './Components/Business'
import TechCrunch from './Components/TechCrunch'
import Tesla from './Components/Tesla'
import WallStreet from './Components/WallStreet'
function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<Apple/>}></Route>
      <Route path='/tesla' element={<Tesla/>}></Route>
      <Route path='/business' element={<Business/>}></Route>
      <Route path='/techcrunch' element={<TechCrunch/>}></Route>
      <Route path='/wallStreet' element={<WallStreet/>}></Route>
     </Routes>
    </>
  )
}

export default App
