import { Button, InputAdornment, TextField } from "@mui/material";
import { Email, Visibility, VisibilityOff } from "@mui/icons-material";
import { Formik,  } from "formik";
import * as Yup from 'yup'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import image2 from '../assest/image/depositphotos_575860964-stock-photo-iot-theme-hand-pressing-button.jpg'
import { useState } from "react";


const registerLoginSchema = Yup.object().shape({
  Email:Yup.string().required('Email alani boş birakilamaz').email('Lütfen mail formatinda giriş yapiniz.').max(30,'Lütfen 30 karakterden az email adresi giriniz.'),
  Password:Yup.string().required('Password alani boş birakilamaz').min(4,'Lütfen minimum 4 karakterden olusacak bir sifre giriniz.')
})


const Login = () => {

  const navigate = useNavigate();

  const [showPassword,setShowPassword] = useState(true);

  const LoginSend = async (values) => {
    try {
      const response = await axios.post("http://localhost:5051/api/Account/Login", values);
      if(response.status===200){
        toast.success(response.data.message)
        const token = response.data.accessToken;     
        navigate('/Profile',{state:{token}})
      }
    } catch (error) {
      toast.error(error.response.data.detail);
    }

  };

  return (
    <Formik
      initialValues={{Email: "", Password: "" }}
      onSubmit={(values) => {LoginSend(values)}}
      validationSchema={registerLoginSchema}
    >
      {({values,handleChange,handleSubmit,handleBlur,touched,errors}) => (
        <div className="flex justify-center min-h-screen items-center" style={{backgroundImage:`url(${image2})`,backgroundPosition:'center', backgroundRepeat:'no-repeat'}}>
          <div className="w-1/4 bg-white bg-opacity-70 rounded-xl">
            <div className="flex justify-center">
              <TextField
                variant="standard"
                id="Email"
                label="Email"
                className="w-5/6"
                onChange={handleChange("Email")}
                value={values.Email}
                onBlur={handleBlur('Email')}
                error={touched.Email && Boolean(errors.Email)}
                helperText={touched.Email && errors.Email}
                InputProps={{
                  endAdornment:(
                    <InputAdornment>
                      <Email className="cursor-default"/>
                    </InputAdornment>
                  )
                }}
              />
            </div>
            <div className="mb-3 flex justify-center">
              <TextField
                variant="standard"
                id="Password"
                label="Password"
                type={showPassword ? 'password' : 'text'}
                className="w-5/6"
                onChange={handleChange("Password")}
                value={values.Password}
                onBlur={handleBlur('Password')}
                error={touched.Password && Boolean(errors.Password)}
                helperText={touched.Password && errors.Password}
                InputProps={{
                  endAdornment:(
                    <InputAdornment onClick={()=>{setShowPassword(!showPassword)}}>
                      {showPassword ? <Visibility className="cursor-pointer" />:<VisibilityOff className="cursor-pointer" />}
                    </InputAdornment>
                  )
                }}
              />
            </div>
            <div className=" flex justify-center gap-10 mb-3 ">
              <Button variant="standard" size="small" onClick={handleSubmit}>
                Login
              </Button>
              <Button href="/Register" variant="standard" size="small">
               Go Register
              </Button>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Login;
