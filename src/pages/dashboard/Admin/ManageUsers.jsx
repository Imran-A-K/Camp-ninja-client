import useAuthentication from "../../../hooks/useAuthentication";
import useGetUsers from "../../../hooks/useGetUsers";
import AdminTableRow from "./AdminTableRow";
import useAxiosInterceptor from "../../../hooks/useAxiosInterceptor";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const [allUsers, refetch] = useGetUsers();
  const [axiosBase] = useAxiosInterceptor();
  const { user } = useAuthentication();

  // console.log(allUsers)
  const makeAdmin = (name, id) => {
    Swal.fire({
      title: "Are you sure?",
      text: `${name} is going to be a new Admin!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I am sure!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axiosBase.patch(`/users/make-admin/${id}`).then((response) => {
          if (response.data.modifiedCount) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: `The ${name} is now an Admin`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  };

  const makeInstructor = (name, id) => {
    Swal.fire({
      title: "Are you sure?",
      text: `${name} is going to be a new Instructor!`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I am sure!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axiosBase.patch(`/users/make-instructor/${id}`).then((response) => {
          if (response.data.modifiedCount) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: `The ${name} is now an Instructor`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  };

  return (
    <div className="">
      <h1 className="text-center text-4xl py-9 font-bold text-indigo-600">
        Manage Users
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="text-xl text-gray-900">
            <tr>
              <th className="bg-indigo-200 rounded-s-lg text-center">No.</th>
              <th className="bg-indigo-200 text-center">Profile</th>
              <th className="bg-indigo-200 text-center">Name</th>
              <th className="bg-indigo-200 text-center">Email</th>
              <th className="bg-indigo-200 text-center">Role</th>
              <th className="bg-indigo-200 text-center">Make Instructor</th>
              <th className="bg-indigo-200 text-center">Make Admin</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((eachUser, index) => (
              <AdminTableRow
                key={eachUser._id}
                serial={index + 1}
                name={eachUser.name}
                email={eachUser.email}
                id={eachUser._id}
                role={eachUser.role}
                imageUrl={eachUser.photoUrl}
                user={user}
                makeAdmin={makeAdmin}
                makeInstructor={makeInstructor}
              ></AdminTableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
