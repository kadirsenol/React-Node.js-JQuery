import { Button, TextField } from "@mui/material";
import { Formik,  } from "formik";
import * as Yup from 'yup'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


const registerLoginSchema = Yup.object().shape({
  Email:Yup.string().required('Email alani boş birakilamaz').email('Lütfen mail formatinda giriş yapiniz.').max(30,'Lütfen 30 karakterden az email adresi giriniz.'),
  Password:Yup.string().required('Password alani boş birakilamaz').min(4,'Lütfen minimum 4 karakterden olusacak bir sifre giriniz.')
})


const Login = () => {

  const navigate = useNavigate();

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
        <div className="flex justify-center min-h-screen items-center">
          <div className="w-1/4">
            <div>
              <TextField
                variant="standard"
                id="Email"
                label="Email"
                className="w-full"
                onChange={handleChange("Email")}
                value={values.Email}
                onBlur={handleBlur('Email')}
                error={touched.Email && Boolean(errors.Email)}
                helperText={touched.Email && errors.Email}
              />
            </div>
            <div className="mb-3">
              <TextField
                variant="standard"
                id="Password"
                label="Password"
                type="password"
                className="w-full "
                onChange={handleChange("Password")}
                value={values.Password}
                onBlur={handleBlur('Password')}
                error={touched.Password && Boolean(errors.Password)}
                helperText={touched.Password && errors.Password}
              />
            </div>
            <div className=" flex justify-center gap-10 ">
              <Button variant="contained" size="small" onClick={handleSubmit}>
                Login
              </Button>
              <Button href="/Register" variant="contained" size="small">
                Register
              </Button>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Login;
