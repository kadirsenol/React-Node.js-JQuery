import { Button, InputAdornment, TextField } from "@mui/material";
import { Badge, Email, Person,  Visibility, VisibilityOff } from "@mui/icons-material";
import { Formik,  } from "formik";
import * as Yup from 'yup'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useState } from "react";
import imagebackground from '../assest/image/depositphotos_351705864-stock-photo-iot-theme-with-hand-pressing.jpg'
import { useNavigate } from 'react-router-dom'

const registerLoginSchema = Yup.object().shape({
  Ad: Yup.string().required('Ad alani boş birakilamaz').min(3,'En az 3 karakterli bir isim giriniz').max(15,'En fazla 15 karakterli isim giriniz'),
  TcNo:Yup.string().required('Tc No alani boş birakilamaz').matches(/^\d+$/,'Lütfen rakam olacak şekilde giriş yapiniz.').min(11,'Lütfen 11 haneli rakamdan olusan Tc No giriniz.').max(11,'Lütfen 11 haneli rakamdan olusan Tc No giriniz.').test('startzerovalid','Tc No 0 ile başlayamaz',value=>value[0]!=='0'),
  Email:Yup.string().required('Email alani boş birakilamaz').email('Lütfen mail formatinda giriş yapiniz.').max(30,'Lütfen 30 karakterden az email adresi giriniz.'),
  Password:Yup.string().required('Password alani boş birakilamaz').min(4,'Lütfen minimum 4 karakterden olusacak bir sifre giriniz.')
})


const Register = () => {

  const navigate = useNavigate();
  const[showPassword,setShowPassword] = useState(true);

  const registerSend = async (values) => {
    try {
      const response = await axios.post("http://localhost:5051/api/Account/Register",values);
      if (response.status === 200) {
        toast.success(response.data);
        navigate("/");
      }
      toast.info('Bilgilerinizi kontrol ederek lutfen tekrar deneyin.')
    } catch (error) {
      if (error.response.status === 500) {
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
  }


  return (
    <Formik
      initialValues={{ Ad: "", TcNo: "", Email: "", Password: "" }}
      onSubmit={(values) => {registerSend(values)}}
      validationSchema={registerLoginSchema}
    >
      {({values,handleChange,handleSubmit,handleBlur,touched,errors}) => (
        <div style={{backgroundImage:`url(${imagebackground})`, backgroundPosition: 'center', backgroundSize:'cover', backgroundRepeat:'no-repeat'}} className="flex justify-center min-h-screen items-center">
          <div className="w-1/4 opacity-1 bg-white bg-opacity-80 rounded-xl">
            <div className="flex justify-center">
              <TextField
                variant="standard"
                id="Ad"
                label="Ad"
                className="w-5/6"
                onChange={handleChange("Ad")}
                value={values.Ad}
                onBlur={handleBlur('Ad')}
                error={touched.Ad && Boolean(errors.Ad)}
                helperText={touched.Ad && errors.Ad}
                InputProps={{
                  endAdornment:(
                    <InputAdornment>
                      <Person className="cursor-default"/>
                    </InputAdornment>
                  )
                }}
              />
            </div>
            <div className="flex justify-center">
              <TextField
                variant="standard"
                id="TcNo"
                label="TcNo"
                className="w-5/6"
                onChange={handleChange("TcNo")}
                value={values.TcNo}
                onBlur={handleBlur('TcNo')}
                error={touched.TcNo && Boolean(errors.TcNo)}
                helperText={touched.TcNo && errors.TcNo}
                InputProps={{
                  endAdornment:(
                    <InputAdornment>
                     <Badge className="cursor-default"/>
                    </InputAdornment>
                  )
                }}
              />
            </div>
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
                type={showPassword ? "password" : "text"}
                className="w-5/6"
                onChange={handleChange("Password")}
                value={values.Password}
                onBlur={handleBlur('Password')}
                error={touched.Password && Boolean(errors.Password)}
                helperText={touched.Password && errors.Password}
                InputProps={{
                  endAdornment:(
                    <InputAdornment className="cursor-pointer" onClick={()=>{setShowPassword(!showPassword)}}>
                    {showPassword ? <Visibility/> : <VisibilityOff/>}
                    </InputAdornment>
                  )
                }}
              />
            </div>
            <div className=" flex justify-center gap-10 mb-3 ">
            <Button variant="standard" size="small" onClick={handleSubmit}>
                Register
              </Button>
              <Button href="/" variant="standard" size="small">
               Go Back Login
              </Button>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Register;
