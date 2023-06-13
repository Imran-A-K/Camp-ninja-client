import Swal from "sweetalert2";
import UseGetAllClasses from "../hooks/UseGetAllClasses"
import useAuthentication from "../hooks/useAuthentication";
import useRoleGetter from "../hooks/useRoleGetter";
import ClassesCard from "./ClassesCard";
import useAxiosInterceptor from "../hooks/useAxiosInterceptor";
 

const Classes = () => {
    const [allApprovedClasses, refetch] = UseGetAllClasses();
    const [axiosBase] = useAxiosInterceptor();

    // console.log(allApprovedClasses)
    const { user } = useAuthentication();
    const [userRole] = useRoleGetter()
    // console.log(userRole)
  const selectClass = async(selectedClass) => {
    if(!user){
      Swal.fire("Please login or register to select this class")
      return
    }

    const bookedClass ={
      student: user?.displayName,
      studentEmail: user?.email,
      classId:selectedClass._id,
      className: selectedClass.className,
      classImage: selectedClass.classImage,
      instructorName: selectedClass.instructorName,
      instructorEmail: selectedClass.instructorEmail,
      price:selectedClass.price
    }
    await axiosBase.post('/book-class',bookedClass)
            .then(response => {
          
                if(response.data.insertedId){
                    Swal.fire({
                        title: 'Your class has been selected successfully please go to Dashboard to make Payment',
                        showClass: {
                          popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                          popup: 'animate__animated animate__fadeOutUp'
                        }
                      })
                    
                }
            })
            .catch(error => console.log(error.message))
  }
  return (
    <div className="max-w-[1300px] mx-auto">
    <h1 className="text-center text-4xl py-9 font-bold text-indigo-600">
    Classes We Offer
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-12 py-10">
        {/* {popularClasses.map((eachClass, i) => {
          return (
           
          );
        })} */}
        {
          allApprovedClasses.map(eachClass => (
            <ClassesCard
            key={eachClass._id}
            id={eachClass._id}
            classImage={eachClass.classImage}
            name={eachClass.className}
            availableSeats={eachClass.availableSeats}
            instructorName={eachClass.instructorName}
            price={eachClass.price}
            userRole={userRole}
            selectedClass={eachClass}
            selectClass={selectClass}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Classes