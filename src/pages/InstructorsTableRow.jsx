
const InstructorsTableRow = ({serial,picture,instructor,email}) => {
  return (
    <tr className="hover">
    <th>{serial}</th>
    <td className="text-center"><div className="avatar">
  <div className="w-24 rounded-full">
    <img src={picture} />
  </div>
</div></td>
    <td className="text-center">{instructor}</td>
    <td className="text-center">{email}</td>
  </tr>
  )
}

export default InstructorsTableRow