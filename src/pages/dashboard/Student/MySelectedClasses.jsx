import React from 'react'
import useGetStudentsSelectedClasses from '../../../hooks/useGetStudentsSelectedClasses'
import Swal from 'sweetalert2'
import axios from 'axios'
import useAxiosInterceptor from '../../../hooks/useAxiosInterceptor'
import StudentSelectedClassesTableRow from './StudentSelectedClassesTableRow'
import { useNavigate } from 'react-router-dom'
import useAuthentication from '../../../hooks/useAuthentication'

const MySelectedClasses = () => {
    const [selectedClasses, refetch] = useGetStudentsSelectedClasses();
    const [axiosBase] = useAxiosInterceptor();
    const { setPaymentItem } = useAuthentication();

    // console.log(selectedClasses)
    const deleteBooking = id => {
        Swal.fire({
          title: 'Are you sure?',
          text: "This class will be deleted from selection!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, I am sure!'
        }).then((result) => {
          if (result.isConfirmed) {
            axiosBase.delete(`https://camp-ninja-server.vercel.app/students-selected-classes?id=${id}`)
            .then(async(response) => {
              if(response.data.deletedCount>0){
              await Swal.fire(
              'Deleted!',
              'The class has been deleted from your selection.',
              'success'
            )
            refetch();
              }
              
            })
            
          }
        }) 
      }
  return (
    <>
         <h1 className="text-center text-4xl py-9 font-bold text-indigo-600">
      My Selected Classes
    </h1>
    <div className="overflow-x-auto">
      <table className="table">
        <thead className="text-xl text-gray-900">
          <tr>
            <th className="bg-indigo-200 rounded-s-lg text-center">No.</th>
            <th className="bg-indigo-200 text-center">Picture</th>
            <th className="bg-indigo-200 text-center">Class</th>
            <th className="bg-indigo-200 text-center">Price</th>
            <th className="bg-indigo-200 text-center">Pay</th>
            <th className="bg-indigo-200 text-center rounded-e-lg">Delete</th>
          </tr>
        </thead>
        <tbody>
          {selectedClasses.map((selectedClass, index) => (
            <StudentSelectedClassesTableRow
              key={selectedClass._id}
              serial={index + 1}
              className={selectedClass.className}
              selectedClass={selectedClass}
              
              id={selectedClass._id}
              deleteBooking={deleteBooking}
              picture={selectedClass.classImage}
              setPaymentItem={setPaymentItem}
              price={selectedClass.price}
              
            ></StudentSelectedClassesTableRow>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default MySelectedClasses