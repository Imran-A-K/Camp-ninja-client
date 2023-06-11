import useAuthentication from "../hooks/useAuthentication";
import useGetInstructors from "../hooks/useGetInstructors"
import InstructorsTableRow from "./InstructorsTableRow";

const Instructors = () => {
  const [allInstructors, refetch] = useGetInstructors();
  const { nav } = useAuthentication();
  // console.log(allInstructors)
  return (
    <div className="max-w-[1300px] max-sm:px-4 mx-auto">
      {
        !nav && <>
              <h1 className="text-center text-4xl py-9 font-bold text-indigo-600">
      Our Instructors
    </h1>
    <div className="overflow-x-auto">
      <table className="table">
        <thead className="text-xl text-gray-900">
          <tr>
            <th className="bg-indigo-200 rounded-s-lg text-center">No.</th>
            <th className="bg-indigo-200 text-center">Profile</th>
            <th className="bg-indigo-200 text-center">Name</th>
            <th className="bg-indigo-200 text-center rounded-e-lg">Email</th>
          </tr>
        </thead>
        <tbody>
          {allInstructors.map((eachInstructor, index) => (
            <InstructorsTableRow
              key={eachInstructor._id}
              serial={index + 1}
              instructor={eachInstructor.name}
              email={eachInstructor.email}
              picture={eachInstructor.photoUrl}
             
            ></InstructorsTableRow>
          ))}
        </tbody>
      </table>
    </div>
        </>
      }
    
    </div>
  )
}

export default Instructors