import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { useEffect } from "react";
import { useState } from "react";
import './Card.css'
import Swal from "sweetalert2";
import useAuthentication from "../../../../hooks/useAuthentication";
import useAxiosInterceptor from "../../../../hooks/useAxiosInterceptor";


const CardForm = () => {

    const stripe = useStripe();
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')
    const elements = useElements();
    const { user,paymentItem } = useAuthentication();
    const [ cardError, setCardError ] = useState('')
    const [axiosBase] = useAxiosInterceptor();
    const [clientSecret, setClientSecret] = useState('')
    // console.log(user)
    useEffect(()=>{
        // console.log(price)
       if(paymentItem.price > 0){
        axiosBase.post('/create-payment-intent', {price : paymentItem.price})
        .then(response =>{
          // console.log(response.data.clientSecret)
          setClientSecret(response.data.clientSecret)
      })
       }
      },[paymentItem,axiosBase])
      const handleSubmit = async(event) =>{
        event.preventDefault();
        const form = event.target;
        setProcessing(true)
        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement)
        if(card === null){
            return
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error){
            setProcessing(false)
            setCardError(error.message)
        }
        else{
            setCardError('')            
        }
       
        const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
          clientSecret,
          {
            payment_method: {
              card: card,
              billing_details: {
                email: user?.email || 'unknown user',
                name: user?.displayName || 'anonymous payer',
              },
            },
          },
        );
        if(confirmError){
          console.log(confirmError)
        }
        setProcessing(false)
        if(paymentIntent.status === 'succeeded'){
          setTransactionId(paymentIntent.id)
          
          const payment = {email: user?.email,
                           transactionId: paymentIntent.id,
                           price : parseFloat(paymentItem.price.toFixed(2)),
                           classId : paymentItem.classId,
                           className: paymentItem.className,
                           student: paymentItem.student,
                           studentEmail:paymentItem.studentEmail,
                           bookedClassId: paymentItem._id,
                           date: new Date(),
                           status : "Payment received and class access given"
                           }
        axiosBase.post('/payments', payment)
        .then(response => {
          if(response.data.insertResult.insertedId && response.data.updatedClass.insertedId && response.data.insertEnroll.insertedId ){
            form.reset();
            Swal.fire({
              position: 'top',
              icon: 'success',
              title: 'Your payment has been processed and your enrollment has been done',
              showConfirmButton: false,
              timer: 1500
            })
           
          }
        })
        }
    } 
    return  (
        <>
        <form className="w-2/3 m-8" onSubmit={handleSubmit}>
            <div>
                <input type="text" required placeholder="card-holder-name" className="bg-white" />
            </div>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
          <div>
                <input type="text" required placeholder="card-holder-address" className="bg-white" />
            </div>
          <div className="text-center">
          <button className="btn mt-4 px-10 btn-info btn-sm mr-32" type="submit"
           disabled={!stripe ||!clientSecret ||processing}>
            Pay
          </button>
          </div>
        </form>
        { cardError && <p className="text-red-600 ml-8">{cardError}</p>}
        {transactionId && <p className="text-green-500 ml-8">Payment Successful! Transaction Id: {transactionId}</p>}
        </>
      )
}

export default CardForm