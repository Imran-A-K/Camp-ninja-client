import { FaRegEdit } from "react-icons/fa"

const MyClasses = () => {
  return (
    <div className=""> 

    <h1 className="text-center text-4xl py-9 font-bold text-indigo-600">My Classes</h1>
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
      
      
      <tr className="hover">
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td className="text-center">Purple</td>
        <td className="text-center">Purple</td>
        <td className="text-center">Purple</td>
        <td className="text-center"><button className="btn bg-slate-800 text-yellow-200 text-lg"><FaRegEdit /></button></td>
      </tr>
      
      
    </tbody>
  </table>
</div>




    </div>
  )
}

export default MyClasses