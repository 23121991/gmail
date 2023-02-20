import { Routes,Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import EmailList from "./EmailList";
import Sidebar from "./Sidebar";
import Header from "./Header";
import SendMail from "./SendMail";
import Mail from "./Mail";
import store from './app/store';
import {Provider,useSelector} from "react-redux";
import { selectSendMessageIsOpen } from './features/mailSlice';

// import { useNavigate } from 'react-router-dom';


function Main() {
  const sendMessageIsOpen= useSelector(selectSendMessageIsOpen);
  // const navigate = useNavigate();


  return (
    <Provider store={store}>
    <div className="app">
      <Header/>
      <div className='app_body'>
        <Sidebar/>
     
        <EmailList/>
       <Routes>
       
      <Route path="/mail" element={<Mail/>}/>
      </Routes>
        
        
     

      </div>
     {sendMessageIsOpen && <SendMail/>} 
    </div>


    </Provider>
  )


}
export default Main;
