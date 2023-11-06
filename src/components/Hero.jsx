import { Link } from "react-router-dom";
import { useState } from "react";
import heading from "../assets/Find Partners (CAs) available online.png";

import img1 from "../assets/Frame 2305.png";
import img2 from "../assets/Frame 2306.png";
import img3 from "../assets/Frame 2307.png";
import { data } from "../utils/dummyData";
import { AiTwotoneStar } from "react-icons/ai";

const Hero = () => {
  const [input, setInput] = useState("");
  const formHandy = (e) => {
    e.preventDefault();
    console.log(input);
  };
  const onChangehandy = (e) => {
    setInput(e.target.value);
    // console.log(e.target.value)
  };

  //   if (input.length > 0) {
  //     const filteredData = data.filter((item) => {
  //       return item.name.toLowerCase().includes(input.toLowerCase());
  //     });
  //     console.log(filteredData);
  //   }

  return (
    <div className=" w-[100vw]  md:w-[94vw] lg:w-[94vw] mx-auto min-h-[80vh] mt-10 flex flex-col md:flex-row lg:flex-row">
      <div className=" w-[100%] md:w-[50%] min-h-[20vh] md:h-[80vh] p-5 md:p-28 flex flex-col items-center gap-5">
        <img className="w-[480px]" src={heading} alt="" />
        <p className="text-gray-400">
          <strong>CONNECT</strong> with us where your services are listed and
          visible to a myriad of businesses seeking CA’s for compliance support
        </p>

        <div id="search-filter"
          className={`bg-white w-full rounded-lg   overflow-y-scroll ${
            input.length > 0 ? "min-h-[40vh]" : "min-h-0"
          }`}
        >
          <div className=" bg-stone-100 w-full rounded-lg border-2 border-gray-300">
            <form
              onSubmit={formHandy}
              className="w-full flex items-center justify-between"
            >
              <input
                className="w-full bg-transparent outline-none border-none px-2 text-lg font-semibold "
                type="text"
                placeholder="Search by name.."
                value={input}
                onChange={onChangehandy}
              />
              <button
                type="submit"
                className="bg-blue-700 text-white font-semibold p-2 md:px-12 py-3 rounded-lg"
              >
                Search
              </button>
            </form>
          </div>

          <div className="w-full min-h-0">
            {input.length > 0
              ? data
                  .filter((item) => {
                    return item.name
                      .toLowerCase()
                      .includes(input.toLowerCase());
                  })
                  .map((item) => {
                    return (
                      <>
                        <Link to={`/user/${item.id}`}>
                          <div
                            key={item.id}
                            className=" hover:bg-blue-50 w-full min-h-0 px-2 rounded-lg py-4 flex items-center justify-between"
                          >
                            <div>
                              <h1 className="font-semibold ">{item.name}</h1>
                              <h1 className="flex items-center gap-1 text-blue-400">
                                <AiTwotoneStar />
                                {item.rating}
                              </h1>
                            </div>

                            <div className="img">
                              <img
                                className="w-20 h-20 rounded-2xl object-cover object-center "
                                src={item.image}
                                alt="userimg"
                              />
                            </div>
                          </div>
                        </Link>
                      </>
                    );
                  })
              : null}
          </div>
        </div>
      </div>

      <div className=" w-[100%] md:w-[50%] lg:w-[50%] h-[80vh] flex justify-between p-5 md:p-0 ">
        <div className="h-[80%] w-[30%] rounded-xl ">
          <img
            className="w-full h-full object-cover object-center rounded-xl"
            src={img2}
            alt=""
          />
        </div>
        <div className="h-[80%] w-[30%]  mt-[15%]">
          <img
            className="w-full h-full object-cover object-center"
            src={img1}
            alt=""
          />
        </div>

        <div className="h-[80%] w-[30%]  ">
          <img
            className="w-full h-full object-cover object-center"
            src={img3}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
