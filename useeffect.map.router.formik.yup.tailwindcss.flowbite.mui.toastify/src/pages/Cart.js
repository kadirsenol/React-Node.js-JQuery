import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { Button, IconButton } from "@mui/material";
import { DeleteForever } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { emptyCart, removeToProduct } from "../store/slices/cartSlice";
import Modal from "../components/Modal";
import { setModalStatus, setModalTriggering } from "../store/slices/modalSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart.products);
  const modalTitle = useSelector((state) => state.modal.title);
  const isTriggeringDeleteCart = useSelector(
    (state) => state.modal.isTriggeringDeleteCart
  );
  const isTriggeringDeleteProduct = useSelector(
    (state) => state.modal.isTriggeringDeleteProduct
  );
  const trigger = useSelector((state) => state.modal.trigger);

  var [myArray, setmyArray] = useState(Array(data.length).fill(1));

  const [newdata, setnewData] = useState([
    //İlgili ürünü sildiğim zaman gelsin diye
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
    setnewData(data); //İlgili ürünü sildiğim zaman gelsin diye
  }, [data]);

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center mt-5">
        {data.length !== 0 ? (
          <div className="w-10/12">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-16 py-3">
                      <span className="sr-only">Image</span>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {newdata &&
                    newdata.map((element, index) => (
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="p-4">
                          <img
                            src={element.image}
                            className="w-16 md:w-32 max-w-full max-h-full"
                            alt="Apple Watch"
                          />
                        </td>
                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                          {element.name}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <button
                              id={index}
                              className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                              type="button"
                              onClick={() => {
                                const newArray = [...myArray];
                                newArray[index] = myArray[index] - 1;
                                setmyArray(newArray);
                              }}
                            >
                              <span className="sr-only">Quantity button</span>
                              <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 2"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M1 1h16"
                                />
                              </svg>
                            </button>
                            <div>
                              <input
                                type=""
                                id={index}
                                className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder={1}
                                required=""
                                readOnly
                                value={myArray[index]}
                              />
                            </div>
                            <button
                              id={index}
                              className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                              type="button"
                              onClick={() => {
                                const newArray = [...myArray];
                                newArray[index] = myArray[index] + 1;
                                setmyArray(newArray);
                              }}
                            >
                              <span className="sr-only">Quantity button</span>
                              <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 18"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 1v16M1 9h16"
                                />
                              </svg>
                            </button>
                          </div>
                        </td>
                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                          {element.price}
                        </td>
                        <td className="px-6 py-4">
                          <IconButton
                            aria-label="delete"
                            onClick={
                              () =>
                                dispatch(
                                  setModalStatus({
                                    triggering: "deleteProduct",
                                    status: true,
                                    trigger: element,
                                  })
                                )
                              // window.confirm("İlgili ön siparişinizi listeden kaldırmak istediğinize emin misiniz ?")
                              //   ? dispatch(removeToCart(element))
                              //   : null
                            }
                          >
                            <DeleteForever color="error" />
                          </IconButton>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className=" flex justify-end mt-5 mb-5">
              <div>
                <Button
                  color="error"
                  variant="outlined"
                  startIcon={<DeleteForever />}
                  onClick={
                    () => {
                      dispatch(
                        setModalStatus({
                          triggering: "deleteCart",
                          status: true,
                        })
                      );
                    }
                    // window.confirm("Ön sipariş listesinin tamamını silmek istediğinize emin misiniz ?")
                    //   ? dispatch(emptyCart())
                    //   : null
                  }
                >
                  Delete All
                </Button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <Modal
        title={modalTitle}
        clickYes={() => {
          if (isTriggeringDeleteProduct) {
            dispatch(removeToProduct(trigger));
            dispatch(setModalStatus({ status: false }));
            dispatch(setModalTriggering());
          } else if (isTriggeringDeleteCart) {
            dispatch(emptyCart());
            dispatch(setModalStatus({ status: false }));
            dispatch(setModalTriggering());
          }
        }}
      />
    </>
  );
};

export default Cart;
