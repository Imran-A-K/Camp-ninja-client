import useAuthentication from "../../../../hooks/useAuthentication"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import CardForm from "./CardForm"


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {
  // const {paymentItem}= useAuthentication()
  // console.log(paymentItem)
  // console.log(parseFloat(paymentItem.price.toFixed(2)))
  return (
    <div>
      <h1 className="text-center text-4xl py-9 font-bold text-indigo-600">
      Please enter your card details to Pay
    </h1>
    <Elements stripe={stripePromise}>
          <CardForm></CardForm>
        </Elements>
    </div>
  )
}

export default Payment