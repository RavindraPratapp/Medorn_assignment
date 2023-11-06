import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, useParams, useRoutes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../store/reducers/productReducer";

const page = () => {
  const { id } = useParams();
  const [product, setproduct] = useState({});
  const dispatch =  useDispatch()
  


  
  const { products } = useSelector((state) => state.productReducer);

  const addToCartHandler = (product)=>{
   
    dispatch(addToCart(product))
    toast.success('Added to cart')
  }

  

  const getDetails = async () => {
    try {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
     
      setproduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetails();
  }, [id]);

  return (
    <>
      <div className=" m-w-[100vw]  mx-auto my-5">
        <div className="w-[80vw] mx-auto">
          <div className=" w-full  flex flex-col md:flex-row gap-5 md:gap-0 px-5 py-10">
            {product?.image ? (
              <img
                src={product?.image}
                alt=""
                className=" w-[300px] h-[300px] object-contain rounded-2xl"
              />
            ) : (
              <div className="w-[40]"> </div>
            )}

            <div className="w-[60vw] px-5">
              <div className="font-bold  font-bold text-2xl ">
                {product?.title}
              </div>
              <div className="text-gray-300S">
                Brand New - with full year warenty
              </div>
              <div className="border-b py-3"></div>

              <div className="w-full flex justify-between items-center">
                <div className="text-lg font-bold mt-5 mb-5 p-2">
                  Price : ₹ {product?.price}
                </div>
                
                {
                  
                }
                <button 
                onClick={()=>addToCartHandler(product)}
                className="bg-blue-500 text-white rounded cursor-pointer px-0 py-0  md:px-16 md:py-3">
                  Add to cart
                </button>
              </div>

              <div className="border-b py-3"></div>

              <div className=" py-3">
                <div className="font-bold"> Discription :</div>
                <div className="text-gray-300S">{product?.description}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
