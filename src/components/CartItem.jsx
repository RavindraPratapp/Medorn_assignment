import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/reducers/productReducer";
import { toast } from "react-toastify";
const CartItem = ({ cartitems }) => {

    const {cart} =  useSelector((state) => state.productReducer)
    const dispatch =  useDispatch()
  const removeFromCarthandler = (id) => {

    const newCart = cart.filter((item)=> item.id !== id)
    dispatch(removeFromCart(newCart))
    toast.error('Removed from cart')

  }

  return (
    <>
      {
        cart.length === 0 ? <div className="text-center text-2xl font-bold">Cart is empty</div> :
        <div className="relative flex justify-start my-2 shadow-lg  w-full border-gray-500  p-5 ">
        <img
          src={cartitems?.image}
          className="w-[100px] h-[100px] object-cover rounded-md "
          alt=""
        />

        <div className="overflow-hidden pl-2 w-full">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center justify-between font-semibold w-[400px] text-[15px]">
              {cartitems?.title}
            </div>
            <div className="font-bold text-lg">₹ {cartitems?.price}</div>
          </div>
          <div className="font-thin">{cartitems?.description.substring(0, 150)}</div>

          <div className="font-bold text-sm absolute bottom-0 right-0">
            <button className="px-10 py-2 rounded-tl-2xl bg-slate-400"
            onClick={()=>removeFromCarthandler(cartitems.id)}
            >
              Remove from cart
            </button>
          </div>
        </div>
      </div>
      }
    </>
  );
};

export default CartItem;
