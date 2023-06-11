import { useState } from "react";
import useAuthentication from "../../../hooks/useAuthentication";
import useAxiosInterceptor from "../../../hooks/useAxiosInterceptor";
import useGetClasses from "../../../hooks/useGetClasses";
import ManageClassTableRow from "./ManageClassTableRow";
import Swal from "sweetalert2";

const ManageClasses = () => {
  const [axiosBase] = useAxiosInterceptor();
  const { user } = useAuthentication();
  const [allClasses, refetch] = useGetClasses();
  console.log(allClasses)
  const [modalOpen, setModalOpen ] = useState(false)
  const approveClass = (name, id) => {
    // console.log(id)
    Swal.fire({
      title: "Are you sure?",
      text: `${name} class is going to be approved!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I am sure!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axiosBase.patch(`/classes/approve-class/${id}`).then((response) => {
          if (response.data.modifiedCount) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: `The ${name} class is now approved`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  }

  const denyClass = (name, id) => {
    Swal.fire({
      title: "Are you sure?",
      text: `${name} class is going to be denied!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I am sure!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axiosBase.patch(`/classes/deny-class/${id}`).then((response) => {
          if (response.data.modifiedCount) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: `The ${name} class is now denied`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  }
  return (
    <>
    <dialog id="my_modal_5" className={`modal modal-bottom sm:modal-middle ${modalOpen ? 'modal-open': '' }`}>
  <form method="dialog" className="bg-indigo-300 modal-box">
  <button htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    <h3 className="font-bold text-center text-lg">Please Enter your feedback here</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn" onClick={() => {
        setModalOpen(true)
        console.log(modalOpen)
      }}>Close</button>
    </div>
  </form>
</dialog>
    <h1 className="text-center text-4xl py-9 font-bold text-indigo-600">
      Manage Classes
    </h1>
    <div className="overflow-x-auto">
      <table className="table">
        <thead className="text-xl text-gray-900">
          <tr>
            <th className="bg-indigo-200 rounded-s-lg text-center">No.</th>
            <th className="bg-indigo-200 text-center">Picture</th>
            <th className="bg-indigo-200 text-center">Class</th>
            <th className="bg-indigo-200 text-center">Instructor</th>
            <th className="bg-indigo-200 text-center">Email</th>
            <th className="bg-indigo-200 text-center">Available seats</th>
            <th className="bg-indigo-200 text-center">Price</th>
            <th className="bg-indigo-200 text-center">Status</th>
            <th className="bg-indigo-200 text-center">Approve/Deny</th>
            <th className="bg-indigo-200 text-center rounded-e-lg">Feedback</th>
          </tr>
        </thead>
        <tbody>
          {allClasses.map((eachClass, index) => (
            <ManageClassTableRow
              key={eachClass._id}
              serial={index + 1}
              className={eachClass.className}
              instructor={eachClass.instructorName}
              email={eachClass.instructorEmail}
              id={eachClass._id}
              availableSeats={eachClass.availableSeats}
              picture={eachClass.classImage}
              user={user}
              price={eachClass.price}
              status={eachClass.status}
              approveClass={approveClass}
              denyClass={denyClass}

            ></ManageClassTableRow>
          ))}
        </tbody>
      </table>
    </div>
  </>
  )
}

export default ManageClasses