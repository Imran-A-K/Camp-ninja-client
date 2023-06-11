
const Classes = () => {
  return (
    <>
    <h1 className="text-center text-4xl py-9 font-bold text-indigo-600">
    Classes We Offer
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
          {/* {allClasses.map((eachClass, index) => (
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
          ))} */}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Classes