import { FaRegEdit } from "react-icons/fa";
const TableRow = ({ serial, nameOfClass, price, availableSeats, enrolled, feedback, status }) => {
  // console.log(status)
  return (
    <tr className="hover">
        <th>{serial}</th>
        <td className="text-center">{nameOfClass}</td>
        <td className="text-center">{price}</td>
        <td className="text-center">{availableSeats}</td>
        <td className="text-center">{enrolled}</td>
        <td className="text-center">{status}</td>
        <td className="text-center">{feedback}</td>
        <td className="text-center"><button className="btn bg-slate-800 text-yellow-200 text-lg"><FaRegEdit /></button></td>
      </tr>
  )
}

export default TableRow