import React from "react";
import styles from "../../styles/styles";
import CountDown from "./CountDown";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../../redux/actions/cart";
import { toast } from "react-toastify";
import Footer from "../Layout/Footer";

const EventCard = ({ active, data }) => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCartHandler = (data) => {
    const isItemExists = cart && cart.find((i) => i._id === data._id);
    if (isItemExists) {
      toast.error("Item already in cart!");
    } else {
      if (data.stock < 1) {
        toast.error("Product stock limited!");
      } else {
        const cartData = { ...data, qty: 1 };
        dispatch(addTocart(cartData));
        toast.success("Item added to cart successfully!");
      }
    }
    // console.log(data)
  }
  return (
    <>
      {
        data ?
          <>
            <div
              className={`w-full h-full bg-white rounded-lg mt-3 overflow-y-scroll ml-4 ${active ? "unset" : "mb-12"
                } lg:flex p-2`}
            >
              <div className="w-full lg:-w[50%] m-auto">
                <img className="ml-4" src={`${data.images[0]?.url}`} alt="" />
              </div>
              <div className="w-full lg:[w-50%] flex flex-col mt-3 justify-center">
                <h2 className={`${styles.productTitle}`}>{data.name}</h2>
                <p>{data.description}</p>
                <div className="flex py-2 justify-between">
                  <div className="flex">
                    <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
                      {data.originalPrice}$
                    </h5>
                    <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
                      {data.discountPrice}$
                    </h5>
                  </div>
                  <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
                    {data.sold_out} sold
                  </span>
                </div>
                <CountDown data={data} />
                <br />
                <div className="flex items-center">
                  <Link to={`/product/${data._id}?isEvent=true`}>
                    <div className={`${styles.button} text-[#fff]`}>See Details</div>
                  </Link>
                  <div className={`${styles.button} text-[#fff] ml-5`} onClick={() => addToCartHandler(data)}>Add to cart</div>
                </div>
              </div>
            </div>
          </>
          :
          <>
            <div>
              <h1 className="text-center w-full pb-[100px] text-[20px] mt-20 mb-10">
                No Events Found!
              </h1>
            </div>
            <Footer />
          </>
      }
    </>
  );
};

export default EventCard;
