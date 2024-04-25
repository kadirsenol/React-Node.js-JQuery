import { Button, InputAdornment, TextField } from "@mui/material";
import { Email, Visibility, VisibilityOff } from "@mui/icons-material";
import { Formik,  } from "formik";
import * as Yup from 'yup'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import image2 from '../assest/image/imglogin.jpg'
import {useState } from "react";
import navbaricon from '../assest/image/iotnavbar.png'


const registerLoginSchema = Yup.object().shape({
  Email:Yup.string().required('Email alani boş birakilamaz').email('Lütfen mail formatinda giriş yapiniz.').max(30,'Lütfen 30 karakterden az email adresi giriniz.'),
  Password:Yup.string().required('Password alani boş birakilamaz').min(4,'Lütfen minimum 4 karakterden olusacak bir sifre giriniz.')
})


const Login = () => {

  const navigate = useNavigate();

  const [showPassword,setShowPassword] = useState(true);

  //BURAYA LOGIN OLUNMUS ISE LOGIN SAYFASINA GELINDIGINDE DIREK HOME YONLENDIREN BIR useEffect ıcınde chackToken yaz.

  const LoginSend = async (values) => {
    try {
      const response = await axios.post("http://localhost:5051/api/Account/Login", values);
      if(response.status===200){        
        localStorage.setItem("token",response.data.accessToken);          
        navigate('/Profile')
        toast.success(response.data.message)
      }
      else{
        toast.info('Beklenmedik bir durum meydana geldi, bilgilerinizi kontrol ederek lutfen tekrar deneyin.')
      }
    } catch (error) {
      console.log(error)
      if(error.code==="ERR_NETWORK"){
        toast.error("Sunucuya bağlanılamadı. !")  
       }
      else if (error.response.status === 500) {
        //Problem(), server side bissunes exceptions and all catch error
        toast.error(error.response.data.detail);
      }
      else if (error.response.status === 400) {
        //BadRequest(), server side valid. Eger frontend validinden bir sekil kurtulursa back validi devreye girecek
          Object.values(error.response.data.errors).forEach((value)=>{
            value.forEach((message)=>{
              toast.error(message)
            })
          })
      }
      else{
        toast.error('Opps! Beklenmedik bir hata meydana geldi.')
      }
    }

  };

  return (
    <Formik
      initialValues={{Email: "", Password: "" }}
      onSubmit={(values) => {LoginSend(values)}}
      validationSchema={registerLoginSchema}
    >
      {({values,handleChange,handleSubmit,handleBlur,touched,errors}) => (
        <div className="flex justify-center min-h-screen items-center relative " style={{backgroundImage:`url(${image2})`, backgroundSize:'cover', backgroundPosition:'center', backgroundRepeat:'no-repeat'}}>
           <img onClick={()=>{navigate("/")}} 
           className="absolute w-10 h-10 top-3 left-5 cursor-pointer hover:bg-zinc-500 rounded-xl" 
           src={navbaricon} 
           alt="ioticon"
           />
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
              <Button onClick={()=>(navigate("/Register"))} variant="standard" size="small">
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
