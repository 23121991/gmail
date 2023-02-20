import { Box,Button,TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Signin = (props) => {
  const navigate = useNavigate();
  const [formDetails,setFormDetails] = useState({
    email: "",
    password: "",
  });
  // const handleSubmit  = (e) =>{
  //   const nextFormState = {
  //     ...inputs,
  //     [e.target.id] : e.target.value,
  //   };
  //   setInputs(nextFormState);
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:5000/api/signin',{...formDetails});
    if(response){
      localStorage.setItem("token",response);
      navigate("*landing")
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box 
        display='flex' 
        flexDirection={'column'}
        maxWidth={400}
        align-items= 'center'
        justify-content= 'center'
        margin='auto'
        marginTop={5}
        padding={5}
        borderRadius={5}
        boxShadow={'5px 5px 10px #ccc'}
        sx={{
          ':hover': {
            boxShadow: "10px 10px 20px #ccc",
          },
        }}

        >
          <img src='https://png.monster/wp-content/uploads/2020/11/gmail-logo-2020-01-4d7e53f1-370x175.png' alt=''/>
          <Typography variant='h3' padding={3} textAlign='center'>Login</Typography>

          <TextField 
          id="email" 
          onChange={(e)=> setFormDetails({...formDetails,email:e.target.value})}
          value={formDetails.email}
          margin='normal'
           type='text' 
           variant='outlined' 
           placeholder='Email'/>

          <TextField 
          id="password" 
          onChange={(e)=> setFormDetails({...formDetails,password:e.target.value})}
          value={formDetails.password}
          margin='normal' 
          type='password' 
          variant='outlined' 
          placeholder='password'/>

         <Button type ="submit"
         sx ={{marginTop:3, borderRadius: 3}}
          variant='contained'>Signin</Button>
         <p className="forgot-password text-right">
          To create an account <a href="/signup">sign up?</a>
        </p>
        </Box>
      </form>
    </div>
  )
}

export default Signin





