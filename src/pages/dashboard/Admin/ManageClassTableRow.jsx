import { FaCheck, FaRegCommentDots, FaTimes } from "react-icons/fa"

const ManageClassTableRow = ({id,textEmptier,serial,picture,className,instructor,email,availableSeats,price,status,approveClass,denyClass,setFeedbackClassId,setTextEmptier }) => {
  return (
    <tr className="hover">
    <th>{serial}</th>
    <td className="text-center"><div className="avatar">
  <div className="w-24 rounded-full">
    <img src={picture} />
  </div>
</div>
</td>
    <td className="text-center">{className}</td>
    <td className="text-center">{instructor}</td>
    <td className="text-center">{email}</td>
    <td className="text-center">{availableSeats}</td>
    <td className="text-center">{price}</td>
    <td className="text-center">{status}</td>
    <td className="text-center ">
        <div className="flex gap-2 items-center justify-center h-full">
        <div className="tooltip" data-tip="approve">
  <button onClick={() => approveClass(className,id)} disabled={status === "Approved"  || status === "Denied"? true : false} className="btn bg-blue-400 text-slate-900 hover:bg-slate-900 hover:text-amber-500"><FaCheck /></button>
</div>
<div className="tooltip" data-tip="deny">
  <button onClick={() => denyClass(className,id)} disabled={status === "Denied" || status === "Approved"? true : false} className="btn bg-red-600 text-gray-800 hover:bg-stone-400 hover:text-red-600 text-lg"><FaTimes /></button>
</div>
        </div>

</td>
    <td className="text-center"><button className="btn bg-slate-800 hover:bg-amber-400 hover:text-slate-900 text-yellow-200 text-lg" onClick={()=>{
      window.my_modal_5.showModal()
      setFeedbackClassId(id)
      setTextEmptier(!textEmptier)
      }}><FaRegCommentDots /></button></td>
  </tr>
  )
}

export default ManageClassTableRow