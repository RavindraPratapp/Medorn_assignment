import React ,{useEffect} from 'react'

import { useSelector, useDispatch } from 'react-redux'
import Product from '../../components/Product'
import { asyncAddProductsAction } from "../../store/actions/productActions";
const Home = () => {

  const dispatch = useDispatch()

  const {products} =  useSelector((state) => state.productReducer)

  useEffect(() => {
    dispatch(asyncAddProductsAction())
  },[])
  

  return (
    <div className='max-w-[100vw] min-h-[100vh] mx-auto '>
    <div className='text-2xl font-bold mt-5 mb-5 p-2' >Products</div>

      <div className='w-full p-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 '>
        {

          products && products.map((item , id)=> {
            return <Product key={id}  products={item}/>
            
          })

        
        }
   
      </div>

  </div>
  )
}

export default Home