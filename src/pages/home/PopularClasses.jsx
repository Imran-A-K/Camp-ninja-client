import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import useGetPopularClasses from "../../hooks/useGetPopularClasses";
const PopularClasses = () => {
    const [popularClasses, refetch] = useGetPopularClasses()
    // console.log(popularClasses)

  return (
    <div className="max-w-[1300px] mx-auto py-10">
      <p className="text-lg text-center text-purple-500  font-semibold">
        Explore Courses
      </p>
      <p className="text-3xl text-center dark:text-white font-semibold  py-3">
        Our Most Popular Classes
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-12 py-10">
        {popularClasses.map((eachClass, i) => {
          return (
            <div
              className="px-6 py-4  rounded-xl bg-gray-50 shadow-lg border border-gray-200 hover:bg-purple-600 group "
              key={i}
            >
              <img className="w-full h-[260px]" src={eachClass.classImage} alt="services" />

              <div className="flex pt-6 justify-between items-center">
                <p className="text-2xl group-hover:text-white font-semibold line-clamp-1">
                  {eachClass.className}
                </p>
                <HiOutlineArrowUpRight className="group-hover:text-white text-lg font-semibold" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularClasses;
