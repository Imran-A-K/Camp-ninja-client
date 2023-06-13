import React from 'react'
import useGetStudentPayment from '../../../../hooks/useGetStudentPayment'

const PaymentHistory = () => {
    const [payments, refetch] = useGetStudentPayment()
    console.log(payments)
    // const formattedDate = new Intl.DateTimeFormat('en-US', { timeStyle: 'short', dateStyle: 'long' }).format(new Date(date));
    const formattedDate = (unformattedDate)=>{
      const date = new Intl.DateTimeFormat('en-US', { timeStyle: 'short', dateStyle: 'long' }).format(new Date(unformattedDate))
      return date;
    }

  return (
    <div>
      <h1 className="text-center text-4xl py-9 font-bold text-indigo-600">
      My payments
    </h1>
    <div className="overflow-x-auto">
      <table className="table">
        <thead className="text-xl text-gray-900">
          <tr>
            <th className="bg-indigo-200 rounded-s-lg text-center">No.</th>
            
            <th className="bg-indigo-200 text-center">Class</th>
            <th className="bg-indigo-200 text-center">Payment($)</th>
            <th className="bg-indigo-200 text-center">Date</th>
            <th className="bg-indigo-200 text-center rounded-e-lg">TransactionId</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            // <MyEnrolledClassesTableRow
            //   key={eachClass._id}
            //   serial={index + 1}
            //   className={eachClass.className}
            //   instructor={eachClass.instructorName}
            //   email={eachClass.instructorEmail}
              
            //   picture={eachClass.classImage}
             
            // ></MyEnrolledClassesTableRow>
            <tr 
            key={payment._id}
            className="hover">
    <th className="text-center">{index + 1}</th>
    
    <td className="text-center">{payment.className}</td>
    <td className="text-center">{payment.price}</td>
    <td className="text-center">{formattedDate(payment.date)}</td>
    <td className="text-center">{payment.transactionId}</td>
  </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default PaymentHistory