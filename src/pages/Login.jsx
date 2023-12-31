import { Link, useLocation, useNavigate } from 'react-router-dom'
import loginImg from '../assets/Login/enter-login-password-registration-page-screen-sign-your-account-creative-metaphor_566886-2871.jpg'
import { useState } from 'react'
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
import { useForm } from "react-hook-form";
import { BiError } from 'react-icons/bi';
import Swal from 'sweetalert2';
import useAuthentication from '../hooks/useAuthentication';


const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [ firebaseError, setFirebaseError ] = useState("")
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn,
    googleSignIn } = useAuthentication()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  }); 
  const from = location.state?.from?.pathname || "/";

  const onSubmit = data => {
    setFirebaseError("")
    // console.log(data)
    signIn(data.email, data.password)
    .then(async(result) => {
      // const user = result.user;
      // console.log(user)
      await Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Login Successful',
        showConfirmButton: false,
        timer: 1500
      })
      navigate(from, { replace : true});
    })
    .catch((error) => {
      // console.log(error.message)
      if (error.message.includes("user-not-found")) {
        setFirebaseError(
          "We couldn't locate your account! Please double-check the accuracy of your email address. If this is your first time here, please register."
        );
      } else if (error.message.includes("wrong-password")) {
        setFirebaseError("Incorrect Password! Please Enter your password correctly");
      }
    });
  };
  const signInwithGoogle = () => {
    googleSignIn()
      .then((result) => {
        const googleUser = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

    
  
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
    <div
      className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex flex-row-reverse justify-center flex-1"
    >
      <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
        
        <div className="mt-12 flex flex-col items-center">
          <h1 className="text-2xl xl:text-3xl font-bold mb-3">
            Welcome back!
          </h1>
          <h1 className="text-2xl xl:text-2xl text-center font-semibold">
            Please enter your details to login
          </h1>
          <div className="w-full flex-1 mt-8">
            <div className="flex flex-col items-center">
              <button onClick={signInwithGoogle}
                className="w-full max-w-xs font-bold shadow-sm rounded-lg py-7 bg-indigo-100 text-gray-800 flex items-center justify-center active:scale-[.98] ease-in-out transform active:duration-100 transition-all hover:scale-[1.01] focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
              >
                <div className="bg-white p-2 rounded-full active:scale-[.98] ease-in-out transform active:duration-100 transition-all hover:scale-[1.01]">
                  <svg className="w-4" viewBox="0 0 533.5 544.3">
                    <path
                      d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                      fill="#4285f4"
                    />
                    <path
                      d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                      fill="#34a853"
                    />
                    <path
                      d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                      fill="#fbbc04"
                    />
                    <path
                      d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                      fill="#ea4335"
                    />
                  </svg>
                </div>
                <span className="ml-4 active:scale-[.98] ease-in-out transform active:duration-100 transition-all hover:scale-[1.01]">
                  Sign In with Google
                </span>
              </button>

              
            </div>

            <div className="my-12 border-b text-center">
              <div
                className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"
              >
                Or sign in with email
              </div>
            </div>

            <div className='text-center mb-4'>
            <span className='text-red-500 font-semibold'>{firebaseError}</span>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-xs">
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="text"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address."
                  }
                })}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors?.email && (
                  <p
                    className="pl-1 pt-2 flex items-center gap-2 text-base text-red-500"
                    role="alert"
                  >
                    <BiError /> {errors.email.message}
                  </p>
                )}
              <div className='relative'>
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                type={(showPassword === false)? 'password' :'text'}
                placeholder="Password"
                {...register("password", {
                  required: "Please Enter your password.",
                })}
                aria-invalid={errors.password ? "true" : "false"}
              />
              <div className='cursor-pointer text-2xl absolute right-3 top-4 z-10'>
                      {
                          (showPassword === false)? <AiFillEye onClick={() => setShowPassword(!showPassword)}/>:
                          <AiFillEyeInvisible onClick={() =>setShowPassword(!showPassword)}/>

                      }
                      
                      
                  </div>
                  {errors?.password && (
                  <p
                    className="pl-1 pt-2 flex items-center gap-2 text-base text-red-500"
                    role="alert"
                  >
                    <BiError /> {errors.password.message}
                  </p>
                )}
              </div>
              <button 
                className="mt-5 tracking-wide font-semibold bg-violet-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 active:scale-[.98] ease-in-out transform active:duration-100 transition-all hover:scale-[1.01] flex items-center justify-center focus:shadow-outline focus:outline-none"
              >
                <svg
                  className="w-6 h-6 -ml-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <path d="M20 8v6M23 11h-6" />
                </svg>
                <span className="ml-3">
                  Sign In
                </span>
              </button>
              <p className="mt-6 text-base text-gray-600 text-center font-semibold">
                Don&apos;t have an account?
              { " "}
                <Link to="/register" className=" text-violet-600 font-bold">
                Register
                </Link>
                
              </p>
            </form>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-violet-100 text-center hidden lg:flex">
        <div
          className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${loginImg})` }}
          ></div>
      </div>
    </div>
    
  </div>
  )
}

export default Login

{/* <div>
          <img
            src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
            className="w-32 mx-auto"
          />
        </div> */}