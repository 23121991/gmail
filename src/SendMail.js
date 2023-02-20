import React from 'react';
import './SendMail.css';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useForm} from "react-hook-form";
import {useDispatch} from 'react-redux';
import { closeSendMessage } from './features/mailSlice';

function SendMail() {
const { register,handleSubmit,formState: { errors }} = useForm({
  To:"",
  subject:"",
  message:""
});

const dispatch = useDispatch();


const onSubmit =(formdata)=>{
  console.log(formdata);
}


  return (
    <div className='sendMail'>
      
        <div className='sendMail_header'>
            <h3>New Message</h3>
            <CloseIcon onClick={()=>dispatch(closeSendMessage())} className="sendMail_close"/>
        </div>
        
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name= "to" placeholder="To"  type="email"  {...register("To", { required: true })}  />
       {errors.To && errors.To.type === "required" && <span className='sendMail_error'>MailId is required !!!</span>}

        <input name= "subject" placeholder="Subject" type="text"{...register("Subject", { required: true })} />
        {errors.Subject && errors.Subject.type === "required" && <span className='sendMail_error'>subject is required !!!</span>}

         <input name= "message" placeholder="Message..." type="text"
        className='sendMail_message'{...register("Message", { required: true })} />
        {errors.Message && errors.Message.type === "required" && <span className='sendMail_error'>message is required !!!</span>}

        <div className='sendMail_options'>

            <Button 
            className='sendMail_send'
            variant="contained"
            color="primary"  
            type="submit">Send</Button>

        </div>
      </form>
    </div>
  );
}

export default SendMail
