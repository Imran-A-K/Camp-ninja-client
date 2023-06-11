import { FaChalkboardTeacher,FaUserShield } from "react-icons/fa";


const AdminTableRow = ({ user,id,imageUrl, name, role, serial,email,makeAdmin,makeInstructor }) => {

    
  return (
    <tr className="hover">
    <th>{serial}</th>
    <td className="text-center">{user.email === email ? <div className="avatar online">
  <div className="w-24 rounded-full">
    <img src={imageUrl} />
  </div>
</div> : <div className="avatar">
  <div className="w-24 rounded-full">
    <img src={imageUrl} />
  </div>
</div>

}</td>
    <td className="text-center">{name}</td>
    <td className="text-center">{email}</td>
    <td className="text-center">{role}</td>
    <td className="text-center"><button onClick={() => makeInstructor(name,id)} disabled={role === "instructor" ? true : false} className="btn bg-slate-800 hover:bg-amber-500 hover:text-gray-800 text-yellow-200 text-lg"><FaChalkboardTeacher /></button></td>
    <td className="text-center"><button 
    disabled={role === "admin" ? true : false} 
    onClick={() => makeAdmin(name,id)} 
    className="btn bg-cyan-600 text-yellow-200 hover:bg-red-600 hover:text-gray-800 text-lg"><FaUserShield /></button></td>
  </tr>
  )
}

export default AdminTableRow