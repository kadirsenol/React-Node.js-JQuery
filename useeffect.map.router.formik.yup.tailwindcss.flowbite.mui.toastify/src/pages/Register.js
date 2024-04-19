import { Button, TextField } from "@mui/material";
import { Formik,  } from "formik";
import * as Yup from 'yup'
import axios from 'axios'
import { toast } from 'react-toastify'


const registerLoginSchema = Yup.object().shape({
  Ad: Yup.string().required('Ad alani boş birakilamaz').min(3,'En az 3 karakterli bir isim giriniz').max(15,'En fazla 15 karakterli isim giriniz'),
  TcNo:Yup.string().required('Tc No alani boş birakilamaz').matches(/^\d+$/,'Lütfen rakam olacak şekilde giriş yapiniz.').min(11,'Lütfen 11 haneli rakamdan olusan Tc No giriniz.').max(11,'Lütfen 11 haneli rakamdan olusan Tc No giriniz.').test('startzerovalid','Tc No 0 ile başlayamaz',value=>value[0]!=='0'),
  Email:Yup.string().required('Email alani boş birakilamaz').email('Lütfen mail formatinda giriş yapiniz.').max(30,'Lütfen 30 karakterden az email adresi giriniz.'),
  Password:Yup.string().required('Password alani boş birakilamaz').min(4,'Lütfen minimum 4 karakterden olusacak bir sifre giriniz.')
})


const Register = () => {
  const registerSend = async (values) => {  
    try {
      const response = await axios.post("http://localhost:5051/api/Account/Register",values)
      if(response.status===200){
        toast.success(response.data)
      }
    } catch (error) {
      toast.error(error.response.data.detail)
    }

  };

  return (
    <Formik
      initialValues={{ Ad: "", TcNo: "", Email: "", Password: "" }}
      onSubmit={(values) => {registerSend(values)}}
      validationSchema={registerLoginSchema}
    >
      {({values,handleChange,handleSubmit,handleBlur,touched,errors}) => (
        <div className="flex justify-center min-h-screen items-center">
          <div className="w-1/4">
            <div>
              <TextField
                variant="standard"
                id="Ad"
                label="Ad"
                className="w-full"
                onChange={handleChange("Ad")}
                value={values.Ad}
                onBlur={handleBlur('Ad')}
                error={touched.Ad && Boolean(errors.Ad)}
                helperText={touched.Ad && errors.Ad}
              />
            </div>
            <div>
              <TextField
                variant="standard"
                id="TcNo"
                label="TcNo"
                className="w-full"
                onChange={handleChange("TcNo")}
                value={values.TcNo}
                onBlur={handleBlur('TcNo')}
                error={touched.TcNo && Boolean(errors.TcNo)}
                helperText={touched.TcNo && errors.TcNo}
              />
            </div>
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
              <Button href="/" variant="contained" size="small">
                Login
              </Button>
              <Button variant="contained" size="small" onClick={handleSubmit}>
                Register
              </Button>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Register;
