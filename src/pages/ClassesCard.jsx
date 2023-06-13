import { HiOutlineArrowUpRight } from 'react-icons/hi2'

const ClassesCard = ({classImage,name,availableSeats,instructorName,id,price,userRole,selectClass,selectedClass}) => {
  return (
    <>
     <div
              className={`px-6 py-4  rounded-xl bg-gray-50 shadow-lg border border-gray-200 ${ availableSeats === 0 ? 'bg-red-400' : 'hover:bg-purple-600' }  group`}
              
            >
              <img className="w-full h-[260px]" src={classImage} alt="services" />
              <p className="text-3xl pt-8 group-hover:text-white font-semibold line-clamp-1">
                  {name}
                </p>
              <p className="text-xl pt-2 group-hover:text-white font-semibold line-clamp-1">
                 Instructor: {instructorName}
                </p>
              <p className="text-xl pt-2 group-hover:text-white font-semibold line-clamp-1">
                 Available Seats: {availableSeats}
                </p>

              <div className="flex pt-4 text-lg font-semibold justify-between items-center">
                Price: ${price}
                {/* <HiOutlineArrowUpRight className="" /> */}
                <button onClick={() => selectClass(selectedClass)} disabled={userRole && userRole === "admin" || userRole === "instructor" ? true : false} className='group-hover:text-slate-800 group-hover:bg-white text-lg font-semibold btn btn-primary'>Select</button>
              </div>
            </div>
    </>
  )
}

export default ClassesCard