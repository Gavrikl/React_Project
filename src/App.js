
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Profile/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route, Routes} from "react-router-dom";





const App =(props)=>{

  return(
    //BrowserRouter специально обрамляеем тегом  для всего приложения

    <div className='app-wrapper'>
    <Navbar/>
    <Header/>
    <div class='app-wrapper-content'>
      {/* В КАЧЕСТВЕ СОВПАДЕНИЯ   path='/dialogs' РИСУЕТ НУЖНЫЙ ТЭГ  element={Dialogs} */}
      <Routes>
      {/* Route следить за строкой браузера path="/profile" */}
              <Route path="/profile" element={<Profile state={props.state.profilePage} />}/>
              <Route path="/dialogs" element={<Dialogs state={props.state.dialogsPage}/>}/>

      </Routes>
    </div>
    </div >
   );
 
  
}

export default App;
