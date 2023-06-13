import { FaAmazonPay } from "react-icons/fa"
import { HiTrash } from "react-icons/hi2"
import { Link } from "react-router-dom"

const StudentSelectedClassesTableRow = ({serial, className,picture, price, id, deleteBooking, setPaymentItem,selectedClass}) => {
  return (
    <tr className="hover">
    <th className="text-center">{serial}</th>
    <td className="text-center"><div className="avatar">
  <div className="w-24 rounded-full">
    <img src={picture} />
  </div>
</div>
</td>
    <td className="text-center">{className}</td>
    <td className="text-center">{price}</td>
    <td className="text-center ">
        <Link onClick={() => {
            setPaymentItem(selectedClass)
        }} to={"/student-dashboard/payment"}>
        <button   className="btn bg-blue-600 text-gray-800 hover:bg-amber-400 hover:text-slate-900 text-base font-semibold"><FaAmazonPay className="text-2xl"/></button>
        </Link>
    

</td>
    <td className="text-center"><button className="btn bg-slate-800 hover:bg-red-400 hover:text-slate-900 text-yellow-200 text-lg" onClick={()=>deleteBooking(id)}><HiTrash /></button></td>
  </tr>
  )
}

export default StudentSelectedClassesTableRow