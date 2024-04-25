import {useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import ProductCard from "../components/ProductCard";

const Profile = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([
    {
      name: "",
      image: "",
      price: "",
      id: 0,
      createDate: "",
      updateDate: "",
      isDelete: false,
    },
  ]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5051/api/Profile/Get",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.status === 200) {
        setData(response.data);
      } else {
        toast.info(
          "Beklenmedik bir durum meydana geldi, bilgilerinizi kontrol ederek lutfen tekrar deneyin."
        );
      }
    } catch (error) {
      console.log(error);
      if (error.code === "ERR_NETWORK") {
        toast.error("Sunucuya bağlanılamadı. !");
      } else if (error.response.status === 401) {
          toast.error("Lütfen giriş yapınız.");
          navigate("/Login");          
      } else {
        toast.error("Ürünler listelenirken bir hata meydana geldi.");
      }
    }
  };

  return (
    <>
      <Navbar />
      <p>Burasi Senin Profilin</p>
      <p className="break-words">
        İşte Tokenin {localStorage.getItem("token")}
      </p>
      {data.map((element) => (
        <ProductCard element={element} />
      ))}
    </>
  );
};

export default Profile;
