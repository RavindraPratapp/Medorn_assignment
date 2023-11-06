import React from 'react'
import CartItem from '../../components/CartItem'
import { useSelector } from 'react-redux'

const CartPage = () => {

    const {cart} =  useSelector((state) => state.productReducer)


  return (
    <>
    <div className="wax-w-[100vw] mx-auto min-h-[40vh] my-5 ">
      <div className=" relative px-5">

        {
             cart.length === 0 ? <div className="text-center text-2xl font-bold">Cart is empty</div> :
             <div className="font-bold text-2xl">Shopping Cart</div>
     
        }


        <div className="flex flex-col md:flex-row items-center my-8 justify-between gap-4">
            <div className="w-[65vw] relative">
                {
                    cart && cart.map((cartitem)=>{

                      
                        return(
                            <CartItem key={cartitem.id} cartitems={cartitem}  />
                        )
                    })
                }
            </div>


            <div className=" relative w-full md:w-[30vw] bg-slate-400 rounded-md ">
                <div className=" p-4 border ">
                    <button className=" flex items-center justify-center bg-blue-500 w-full text-xl  text-white font-semibold rounded-xl py-2 ">
                        Go for payment

                    </button>
                    <div className="flex font-thin  items-center justify-between ">
                        <div>Items on cart (3)</div>
                        <div>187</div>
                    </div>
                    <div className="flex my-1 font-thin  items-center justify-between ">
                        <div>Shipping </div>
                        <div>Free</div>
                    </div>
                    <div className="border  border-b-stone-950"></div>
                    <div className="flex items-center justify-between">
                        <div className="font-bold">Sub-Total</div>
                        <div className="font-bold">187</div>
                    </div>

                </div>


                


            </div>

        </div>

      </div>
    </div>

    {/* <SimilerProducts /> */}
  </>
  )
}

export default CartPage