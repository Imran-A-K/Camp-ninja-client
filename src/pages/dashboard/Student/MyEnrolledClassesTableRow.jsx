
const MyEnrolledClassesTableRow = ({serial,picture,className,instructor,email}) => {
  return (
    <tr className="hover">
    <th className="">{serial}</th>
    <td className="text-center"><div className="avatar">
  <div className="w-24 rounded-full">
    <img src={picture} />
  </div>
</div>
</td>
    <td className="text-center">{className}</td>
    <td className="text-center">{instructor}</td>
    <td className="text-center">{email}</td>
  </tr>
  )
}

export default MyEnrolledClassesTableRow