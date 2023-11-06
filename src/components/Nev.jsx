
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Nev = () => {

  const {cart} =  useSelector((state) => state.productReducer)

  return (
    <>
      <div id="Nev" className="border-b py-3">
        <div className="flex px-5 items-center justify-between w-full mx-auto max-w-[1200px]">
          <ul
            id="nevLeft"
            className="flex gap-4 items-center text-amber-400 text-gray-500"
          >
            <Link  to='/' className="relative px-5 border-none ">

               <h1 className="text-xl font-bold">SHOP.</h1>
              
            </Link>

            {/* <li className="hover:underline">Daily Deals</li>
            <li className="hover:underline">Daily Stocked</li> */}
          </ul>

          <ul id="nevRight" className="flex gap-5 items-center">
            <li className="flex items-center hover:underline">
              <img
                src="https://png.pngtree.com/png-clipart/20200310/ourlarge/pngtree-india-flag-transparent-watercolor-painted-brush-png-image_2156715.jpg"
                width={35}
                className="object-cover"
                alt=""
              />
            
            </li>

            <li>
              <Link to='/cart' className="relative">
                <AiOutlineShoppingCart className="cursor-pointer" size={30} />
                <div className="absolute p-3  -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-[15px]">
                   {cart.length}
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nev;
