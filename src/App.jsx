
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Landing from './Landing'
import Blog from './Blog'
import Login from './Login'
import Signup from './signup'
import ForgotPassword from './ForgotPassword'
import Home from './Home.jsx'
import AddBlog from './AddBlog.jsx'
import Edit from './Edit.jsx'
import Footer from './Footer.jsx'
import Single from './Single.jsx'
import Card from './Card.jsx'
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/card' element={<Card/>}/>
      <Route path='/navbar' element={<Navbar/>}/>
      <Route path='/landing' element={<Landing/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/forgotpassword' element={<ForgotPassword/>}/>
      <Route path='/addblog' element={<AddBlog/>}/>
      <Route path='/edit' element={<Edit/>}/>
      <Route path='/footer' element={<Footer/>}/>
      <Route path='/single' element={<Single/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
