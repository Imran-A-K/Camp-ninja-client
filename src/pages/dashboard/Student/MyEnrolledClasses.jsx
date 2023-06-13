import useGetEnrolledClass from "../../../hooks/useGetEnrolledClass"
import MyEnrolledClassesTableRow from "./MyEnrolledClassesTableRow";

const MyEnrolledClasses = () => {
    const [enrolledClasses, refetch] = useGetEnrolledClass();
    console.log(enrolledClasses)
  return (
    <>
    <h1 className="text-center text-4xl py-9 font-bold text-indigo-600">
      My Enrolled Classes
    </h1>
        <div className="overflow-x-auto">
      <table className="table">
        <thead className="text-xl text-gray-900">
          <tr>
            <th className="bg-indigo-200 rounded-s-lg text-center">No.</th>
            <th className="bg-indigo-200 text-center">Picture</th>
            <th className="bg-indigo-200 text-center">Class</th>
            <th className="bg-indigo-200 text-center">Instructor</th>
            <th className="bg-indigo-200 text-center rounded-e-lg">Email</th>
          </tr>
        </thead>
        <tbody>
          {enrolledClasses.map((eachClass, index) => (
            <MyEnrolledClassesTableRow
              key={eachClass._id}
              serial={index + 1}
              className={eachClass.className}
              instructor={eachClass.instructorName}
              email={eachClass.instructorEmail}
              
              picture={eachClass.classImage}
             
            ></MyEnrolledClassesTableRow>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default MyEnrolledClasses