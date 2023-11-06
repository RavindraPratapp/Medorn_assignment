import { gridData } from "../utils/dummyData";

const Grid = () => {
  return (
    <div className=" w-[100vw] md:w-[80vw]  mx-auto min-h-[80vh] mt-10">
      <div className="flex mx-auto flex-col gap-3 items-center mt-5">
        <h1 className="text-5xl font-extrabold">
          Want <span className="text-[#0276CE]">Join</span> Us?
        </h1>
        <p className="font-semibold px-10 md:px-0 ">
          To remain with us, it is essential that you diligently follow the steps provided
        </p>
      </div>

      <div className=" w-[100%] h-[100%]">
        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {gridData.map((item) => {
              return (
                <>
                  <div
                    key={item.id}
                    className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
                  >
                    <article className="bg-white overflow-hidden rounded-lg shadow-lg">
                      <div className=" w-full h-full flex items-center flex-col gap-2 p-4">
                        <div className="flex flex-col items-center justify-center">
                          <h1 className="text-xl font-bold">{item.title} </h1>
                          <p>{item.disc} </p>
                        </div>

                        <div className="bg-gray-200 rounded-lg w-full h-full mt-4 p-6 flex flex-col gap-4 ">
                          <div className=" w-full h-full flex items-center justify-between">
                            <div className="text-blue-500 font-semibold">
                              Due date
                            </div>
                            <div className="text-red-500 font-semibold">
                              Penalty fees
                            </div>
                          </div>
                          <>
                            <div className=" w-full h-full flex items-center justify-between">
                              <div>{Object.keys(item.due[0]).join('')}</div>
                              <div>{Object.values(item.due[0]).join('')}</div>
                            </div>
                          </>
                        </div>
                      </div>
                    </article>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
