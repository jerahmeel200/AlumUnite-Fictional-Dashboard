 
import {Route, BrowserRouter as Router, Routes, } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AddUser from './pages/AddUser'
import ManageUsers from './pages/ManageUser'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
 

  return (
    <>
       <Router>
        <Navbar/>
<div className='container mx-auto p-4'>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/add-user" element={<AddUser />} />
<Route path="/manage-users" element={<ManageUsers />} />
</Routes>
<ToastContainer position="top-right" autoClose={3000} />
</div>
       </Router>
     
    </>
  )
}

export default App
