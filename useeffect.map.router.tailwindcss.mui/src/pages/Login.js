import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";



const Login = () => {

    const[username,setUsername] = useState('');
    const[password,setPassword] = useState('');


    const sendLogin =async ()=>{
        try {
            const response = await axios.post('',{
                Email:{username},
                Password : {password}
              })
              console.log(response)
        } catch (error) {
            console.log(error)
        }
          
    }

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-1/4">
        <div>
          <TextField
            variant="standard"
            label="Username"
            className="w-full"
            onChange={(event) => {
                setUsername(event.target.value);
              }}
          />
        </div>
        <div className="mb-3">
          <TextField
            variant="standard"
            label="Password"
            type="password"
            className="w-full "
            onChange={(event) => {
                setPassword(event.target.value);
              }}
          />
        </div>
        <div className="flex justify-center">
          <Button variant="contained" size="small" onClick={sendLogin}>
            Buton
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
