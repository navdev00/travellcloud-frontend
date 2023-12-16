import React from 'react';
import './App.css';

import { BrowserRouter as Router,Routes,Route,Navigate } from "react-router-dom";
import { useSelector } from 'react-redux'

// import Resgister from './Components/Register/Resgister';


import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';

import Home from './Components/Home/Home';


import { ToastContainer} from 'react-toastify';
import SinglePage from './Components/SinglePage/SinglePage';
import AdminArea from './Components/AdminArea/AdminArea';
import  EditPackage from './Components/AdminArea/EditPackage';
import Resgister from './Components/Register/Resgister';
import Header from './Components/Header/Header';
import AddHappyClients from './Components/AdminArea/AddHappyClients';
import Gallery from './Components/Gallery/Gallery';
import NotFound from './Components/NotFound/NotFound';

function App() {
  const { user } = useSelector((state)=> state.user);






  return (

   <Router>
    {/* <Header/> */}


        
        <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />

        <Routes>

        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}/>
        <Route path="/register" element={user ? <Navigate to="/" /> : <Resgister />}/>

          

          <Route path="/" element={<Home/>} />
          <Route path="/gallery" element={<Gallery />} />

          <Route path="/tour/:id/package" element={<SinglePage/>} />
          {user && user.isAdmin ?  <Route path="/tour/admin/add/package" />:'' }
          
          {user && user.isAdmin ? <Route path="/tour/admin/all/package" element={<AdminArea/>} /> :'' }
          {user && user.isAdmin ? <Route path="/tour/admin/package/:id" element={<EditPackage/>} /> :'' }
          {/* {user && user.isAdmin ? <Route path="/tour/admin/add/clients" element={AddHappyClients} /> :'' } */}


         <Route path="/tour/admin/add/clients" element={<AddHappyClients />} />

         <Route path="*" element={<NotFound />} />



        </Routes>
   </Router>
    
   
    
  );
}


export default App;
