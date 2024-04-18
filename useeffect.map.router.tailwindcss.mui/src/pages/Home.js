import { useState, useEffect } from "react";
import axios from "axios";
const Home = (props) => {
  const [data, setData] = useState([
    {
      name: "",
      image: "",
      price: "",
    },
  ]);

  useEffect(() => {
    getProduct();
  }, []); // Home Componenti cagirildiginda calismasini istedigim metod

  async function getProduct() {
    try {
      const response = await axios.get(
        "http://localhost:5051/api/Product/Get",
        {
          headers: {
            Authorization: `Bearer ${props.token}`,
          },
        }
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <p>{data[0].name}</p>
    </>
  );
};

export default Home;
