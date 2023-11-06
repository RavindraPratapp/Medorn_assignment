
import { AiOutlineSearch } from 'react-icons/ai'

const Nev = () => {

  const formHandler = (e) => {
    e.preventDefault()
  }
  return (
    <>

    <div id='Nev' className='border-b' >
        <div className='w-full flex items-center justify-evenly mx-auto'>
            

            <img width={100} className='object-cover' src="https://png.pngtree.com/png-clipart/20230116/original/pngtree-online-shopping-logo-desing-png-image_8918925.png" alt="" />

            <form onSubmit={formHandler} className='relative e-full '>

                <div  className=' flex gap-2 rounded-lg w-[300px] md:w-[1000px] border-2 p-2 border-gray-500 ' >
                <button>
                    <AiOutlineSearch size={30} />
                </button>

                <input className='w-full focus:outline-none bg-transparent' type="text" placeholder='Search...' />
                <button className='absolute right-0 top-0 h-full px-1 bg-slate-500 text-white' >Search</button>


                </div>
            


            </form>
           

        </div>
    </div>
    
    
    </>
  )
}

export default Nev