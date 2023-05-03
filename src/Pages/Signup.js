import axios from "axios";
import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Authlayout from '../Template/Authlayout';
import { validateEmail } from "../utilities/helper";

export default function Signup() {
  const [formDetails, setFormDetails] = useState({});

  const handleInput = (e) => {
    if (e){
      const formDetailsCopy = Object.assign({}, formDetails);
      formDetailsCopy[e.target.id] = e.target.value;
      setFormDetails(formDetailsCopy);
    }
  };





  // const [inputs,setInputs]=useState({
  //     username: "",
  //     email: "",
  //     password: "",
  //   });
  //   const onUpdateField = (e) =>{
  //     const nextFormState = {
  //       ...inputs,
  //       [e.target.name] : e.target.value,
  //     };
  //     setInputs(nextFormState);
  //   };
  //   const onSubmitForm = (e) => {
  //     e.preventDefault();
  //     alert(JSON.stringify(inputs,null,2));
  //     console.log(inputs);

  //   };
   

     const handleCreateAccount = (error) => {
      const formDetailsCopy = Object.assign({}, formDetails);
         if (!validateEmail(formDetailsCopy?.email || "")) {
           alert("Email is not a valid");
       }else 
    {
      axios
        .post("https://gmailback.onrender.com/api/signup", {formDetailsCopy})
        .then((response) => console.log(response))
        .catch((e) => console.log(e));

    }
  };

  return (
    <Authlayout>
      <div>
        <form >
          <Box
            display='flex'
            flexDirection={'column'}
            maxWidth={400}
            align-items='center'
            justify-content='center'
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
            <img src='https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088003_960_720.png' alt='' />
            <Typography variant='h3' padding={3} textAlign='center'>
            </Typography>

            <h2>Signup</h2>


            <TextField
              id="username"
              value={formDetails["username"] || ""}
              margin='normal'
              type='text'
              variant='outlined'
              placeholder='username' 
              onChange={handleInput}/>

            <TextField
              id="email"
              value={formDetails["email"] || ""}
              margin='normal'
              type='text'
              variant='outlined'
              placeholder='email' 
              onChange={handleInput}/>

            <TextField
              id="password"
              onChange={handleInput}
              value={formDetails["password"] || "" }
              margin='normal'
              type='text'
              variant='outlined'
              placeholder='password' />



            <Button
              type="submit"
              sx={{ marginTop: 3, borderRadius: 3 }}
              variant='contained' onClick={handleCreateAccount}>Signup</Button>
            <p className="forgot-password text-right">
              Already registered <a href="/">sign in?</a>
            </p>
          </Box>
        </form>
      </div>
    </Authlayout>
  )
          };



//{isSignup ? "Signin" : "Signup"}
//{isSignup &&