import { FaRegEdit } from "react-icons/fa";
import useInstructorClasses from "../../../hooks/useInstructorClasses";
import TableRow from "./TableRow";

const MyClasses = () => {
  const [instructorClasses, refetch] = useInstructorClasses();
  console.log(instructorClasses);
  return (
    <div className="">
      <h1 className="text-center text-4xl py-9 font-bold text-indigo-600">
        My Classes
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="text-xl text-gray-900">
            <tr>
              <th className="bg-indigo-200 rounded-s-lg">No.</th>
              <th className="bg-indigo-200">Class</th>
              <th className="bg-indigo-200">Price</th>
              <th className="bg-indigo-200">Available Seats</th>
              <th className="bg-indigo-200">Enrolled Students</th>
              <th className="bg-indigo-200">Status</th>
              <th className="bg-indigo-200">Feedback</th>
              <th className="bg-indigo-200 rounded-e-lg">Update</th>
            </tr>
          </thead>
          <tbody>
            {instructorClasses.map((eachClass, index) => <TableRow
                key={eachClass._id}
                serial={index + 1}
                nameOfClass={eachClass.className}
                price={eachClass.price}
                availableSeats={eachClass.availableSeats}
                enrolled={eachClass.enrolled}
                status={eachClass.status}
                feedback={eachClass.feedback}
              />
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
