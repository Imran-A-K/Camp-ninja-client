import healthImg from '../../../../assets/Slider/heart.svg'
import publicImg from '../../../../assets/Slider/public.svg'
import think from '../../../../assets/Slider/think.svg'
const Slider4 = () => {
  return (
    <div className="max-w-[1300px] mx-auto max-sm:px-8 ">
      <div className="flex flex-col md:flex-row justify-between items-center py-10">
        <div className="flex flex-col gap-4">
          <p className="text-5xl capitalize font-semibold">

          Unleash Your Inner    
          </p>
          <p className='text-5xl capitalize font-semibold'>Champion at our </p>
            <p className="text-purple-500 text-5xl capitalize font-semibold">Sports Summer Camp!</p>{" "}
          <p className="text-lg text-gray-800 mt-2">
            We provide you with the latest camping system {" "}
            <br />
            based on all kinds of sorts.
          </p>
         
          <div className="flex gap-6 items-center pt-6">
            <div className="flex gap-2 items-center">
                <img src={publicImg} alt="" />
                <p>Public Speaking</p>
            </div>
            <div className="flex gap-2 items-center">
                <img className='w-6' src={healthImg} alt="" />
                <p>Health Oriented</p>
            </div>
            <div className="flex gap-2 items-center">
                <img src={think} alt="" />
                <p>Creative Thinking</p>
            </div>
          </div>
        </div>

        <div>
        <img className='w-[611px] h-[472px] max-sm:w-[350px] max-sm:h-[300px] max-sm:pt-7 rounded-full' src={"https://images.pexels.com/photos/16008185/pexels-photo-16008185/free-photo-of-jockey-on-horse-on-competition.jpeg?auto=compress&cs=tinysrgb&w=600"} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Slider4