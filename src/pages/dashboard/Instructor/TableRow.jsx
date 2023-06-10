import { FaRegEdit } from "react-icons/fa";
const TableRow = ({ serial, className, price, availableSeats, enrolled, feedback }) => {
  return (
    <tr className="hover">
        <th>{serial}</th>
        <td>{className}</td>
        <td>{price}</td>
        <td className="text-center">{availableSeats}</td>
        <td className="text-center">{enrolled}</td>
        <td className="text-center">{feedback}</td>
        <td className="text-center"><button className="btn bg-slate-800 text-yellow-200 text-lg"><FaRegEdit /></button></td>
      </tr>
  )
}

export default TableRow