import {
  HiChip,
  HiOutlineChip,
  HiOutlinePhone,
  HiArrowSmRight,
  HiSupport,
} from "react-icons/hi";

import supportImg from "../../assets/agent/Agent.jpg";

const Support = () => {
  return (
    <div name="support" className="max-w-[1300px] relative mx-auto mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={supportImg}
          alt="/"
        />
      </div>

      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="text-3xl pt-8 text-slate-300 font-semibold uppercase text-center">
            Interested to join with us?
          </h2>
          <h3 className="text-5xl font-bold py-6 text-center">
            Become a franchise 
          </h3>
          <p className="py-4 text-3xl text-center text-slate-300">
            We are offering franchises at all over the country and we offer all the support needed.Feel free to contact us for 
            more information
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <h3 className="font-bold text-2xl my-6 flex items-center gap-3 text-white rounded-lg">
                <HiOutlinePhone className="bg-indigo-500 rounded-lg p-1" />{" "}
                <span className="text-black">Sales</span>
              </h3>
              <p className="text-gray-600 text-xl">
                We offer quality sales support bu automating your entire sales. Our software handles everything starting from revenue to tax submission
              </p>
            </div>
            <div className="bg-slate-100 hover:bg-slate-300 pl-8 py-4">
              <p className="flex items-center  text-indigo-600">
                Contact Us <HiArrowSmRight className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
            <h3 className="font-bold text-2xl my-6 flex items-center gap-3 text-white rounded-lg">
                <HiSupport className="bg-indigo-500 rounded-lg p-1" />{" "}
                <span className="text-black">Equipment Support</span>
              </h3>
              
              <p className="text-gray-600 text-xl">
                We offer all the equipments you need to set up your franchise. We provide you with all the quality equipments
                so you don't need to worry about it. 
              </p>
            </div>
            <div className="bg-slate-100 hover:bg-slate-300 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact Us <HiArrowSmRight className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl  shadow-2xl">
            <div className="p-8">
            <h3 className="font-bold text-2xl my-6 flex items-center gap-3 text-white rounded-lg">
                <HiOutlineChip className="bg-indigo-500 rounded-lg p-1" />{" "}
                <span className="text-black">Marketing Support</span>
              </h3>
              
              <p className="text-gray-600 text-xl">
                We offer marketing support for your franchise at your city. We only offer one franchise per city to maximize productivity.Contact us to know more.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 hover:bg-slate-300 py-4">
              <p className="flex items-center text-indigo-600">
                Contact Us <HiArrowSmRight className="w-5 ml-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
