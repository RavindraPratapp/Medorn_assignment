import maskImage1 from "../assets/Mask group.png";
import maskImage2 from "../assets/Mask group (1).png";
import searchIcon from "../assets/searchicon.png";
import book from "../assets/book.png";
import peoples from "../assets/peples.png";
import degree from "../assets/degree.png";
const Lastsection = () => {
  return (
    <div className=" w-[100vw] md:w-[94vw] lg:w-[94vw] mx-auto min-h-[80vh] mt-10 flex flex-col md:flex-row lg:flex-row">
      <div className="w-[100%] md:w-[50%] lg:w-[100%] h-[70vh] p-5 md:p-24 lg:p-24 flex flex-col items-center gap-5">
        <div className="text-5xl font-extrabold">
          <span className="text-blue-500">All-in-One</span> Platform that Makes
          Easier
        </div>
        <p>
          We are more than a platform; We are your success partner. Discover our
          services to achieve your business and educational goals
        </p>

        <div className="flex gap-5 w-full items-center justify-between">
          <div className="flex gap-3">
            <img className="w-14 h-14 object-cover" src={searchIcon} alt="" />
            <div>
              <strong>SEARCH</strong> for vital company information
            </div>
          </div>

          <div className="flex gap-3">
            <img className="w-14 h-14 object-cover" src={peoples} alt="" />
            <div>
              <strong>CONNECT</strong> with the resources to meet your business
              needs
            </div>
          </div>
        </div>

        <div className="flex gap-5 w-full items-center justify-between">
          <div className="flex gap-3">
            <img className="w-14 h-14 object-cover" src={book} alt="" />
            <div>
              <strong>RESEARCH</strong> and generate reports that drive growth
            </div>
          </div>

          <div className="flex gap-3">
            <img className="w-14 h-14 object-cover" src={degree} alt="" />
            <div>
              <strong>ACADEMY</strong> to give you the skills for success in
              your career
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] md:w-[50%] lg:w-[100%] h-[80vh] flex ">
        <div className="w-[50%] h-full flex flex-col ">
          <div className="w-full h-[50%] p-5 ">
            <div className="bg-[#efd9f9] rounded-l-full rounded-tr-full px-4 py-3">
              Hey, check out loreumipsum services.{" "}
            </div>

            <div className="bg-[#efd9f9] rounded-l-full rounded-tr-full px-4 py-3 mt-2">
              I learned from their videos
            </div>
            <div className="bg-[#efd9f9] rounded-l-full rounded-tr-full px-4 py-3 mt-2">
              You was not be disappointed with their services.
            </div>
          </div>
          <div className="w-full h-[50%] flex items-center justify-center ">
            <img
              className="w-[70%] h-[90%] object-cover"
              src={maskImage2}
              alt="img"
            />
          </div>
        </div>

        <div className="w-[50%] h-full ">
          <div className="w-full h-[50%] ">
            <img
              className="w-[100%] md:w-[60%] h-[90%] object-cover flex items-center justify-center p-2"
              src={maskImage1}
              alt="img"
            />
          </div>
          <div className="w-full h-[50%] "></div>
        </div>
      </div>
    </div>
  );
};

export default Lastsection;
