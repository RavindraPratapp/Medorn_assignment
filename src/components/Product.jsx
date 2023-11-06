import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { addToCart } from "../store/reducers/productReducer";
import { toast } from "react-toastify";

const Product = ({ products }) => {

  const dispatch =  useDispatch()

  const addToCartHandler = (product)=>{
    dispatch(addToCart(product))
    toast.success('Added to cart')
  }

  return (
    <>
      <div className="max-w-[200px] p-1 shadow-xl mx-auto border-gray-300 border hover:scale-105 transition-all">
        {products?.image && (
          <img
            src={products.image}
            alt=""
            className="w-full h-[200px] object-contain "
          />
        )}

        <div className="pt-2 px-2">
          {products?.title && (
            <div className="text-sm font-semibold text-[12px]">
              {products.title.split("(")[0]}
            </div>
          )}
        </div>

        <div className="font-extrabold px-2">
          ₹ {Math.floor(products.price)}
        </div>
        <div
          className="relative flex items-center
             text-[12px] justify-between "
        >
          <div>
            <button
            className="text-xs font-bold bg-blue-200 px-3 py-1" 
            >
              <Link to={`/details/${products.id}`}>Details</Link>
            </button>
          </div>

          <div>
            <button
            className="text-xs font-bold bg-yellow-400 px-2 py-1"

            onClick={()=>addToCartHandler(products)}
           
            >Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
