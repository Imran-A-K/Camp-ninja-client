import { useEffect, useState } from "react";
import useAuthentication from "../../../hooks/useAuthentication";
import useAxiosInterceptor from "../../../hooks/useAxiosInterceptor";
import useGetClasses from "../../../hooks/useGetClasses";
import ManageClassTableRow from "./ManageClassTableRow";
import Swal from "sweetalert2";

const ManageClasses = () => {
  const [axiosBase] = useAxiosInterceptor();
  const { user } = useAuthentication();
  const [allClasses, refetch] = useGetClasses();
  const [feedbackClassId, setFeedbackClassId] = useState("")
  const [feedbackError,setFeedbackError] = useState("")
  const [textEmptier,setTextEmptier] = useState(true);
  console.log(allClasses)
  useEffect(()=>{
    const feedback = document.getElementById('feedback');
    feedback.value = "";
    setFeedbackError("");
  },[textEmptier])
  const giveFeedback =async(event,classId) => {
    event.preventDefault();
    const form = event.target.parentNode.parentNode
    const feedback = form.feedback.value;
    const modal = document.getElementById('my_modal_5');
    if(!feedback){
      setFeedbackError("Please Provide a feedback")
      return
    }
    // const feedback = document.getElementById('feedback').value;
    // console.log(feedback,classId)
    await axiosBase.patch(`/classes/class-feedback/${classId}`,{feedback: feedback})
    .then((response) => {
      if (response.data.modifiedCount) {
        // refetch();
        modal.close();
        // form.reset()
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Your feedback has been stored`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }
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
    <dialog id="my_modal_5" className={`modal modal-bottom sm:modal-middle `}>
  <form method="dialog" className="bg-indigo-300 modal-box">
  <button htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    <h3 className="font-bold text-center text-lg">Please Enter your feedback here</h3>
    <textarea placeholder="Your Feedback" id="feedback" name="feedback" className="textarea textarea-bordered textarea-sm w-full mt-10" ></textarea>
    <p>{feedbackError}</p>
    <div className="modal-action">
      <button className="btn" onClick={(event) => giveFeedback(event,feedbackClassId)}>Submit</button>
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
              setFeedbackClassId={setFeedbackClassId}
              setTextEmptier={setTextEmptier}
              textEmptier={textEmptier}
            ></ManageClassTableRow>
          ))}
        </tbody>
      </table>
    </div>
  </>
  )
}

export default ManageClasses