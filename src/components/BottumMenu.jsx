
const BottumMenu = () => {

    const menuItems = [

        {id:0, name:'Home',},
        {id:1, name:'Saved',},
        {id:2, name:'Electronics',},
        {id:3, name:'Fashion',},
        {id:4, name:'Health & Beauty',},
        {id:5, name:'Motors',},
        {id:6, name:'Collectibles & Art',},
        {id:7, name:'Home & Garden',},
        

    ]
  return (
    <>

    <div className='border-b'>
        <div className='flex items-center justify-between w-full mx-auto max-w-[1200px]'>

            <ul id='subBottumMenu' className='flex gap-10  items-center text-[15px] px-4 h-8'>

                {

                    menuItems.map((item )=> {

                        return(
                            <li key={item.id} className=' cursor-pointer hover:underline text-xl text-orange-300' >
                                {item.name}
                            </li>
                        );


                    })
                }
            </ul>
        </div>

    </div>
    
    
    </>
  )
}

export default BottumMenu