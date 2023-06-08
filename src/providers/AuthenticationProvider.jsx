import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthenticationProviders = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [ useCartQueryEnabler, setUseCartQueryEnabler ] = useState(false);



  const createUser = (email, password) => {
    setLoading(true)
   return createUserWithEmailAndPassword(auth, email, password)
  }
  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }
  const updateUserProfile = (name, photo) => {
   return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    });
  }
  const googleSignIn =  () => {
    return signInWithPopup(auth, googleProvider);
  } 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async(currentUser) => {
        setUser(currentUser)
        
    //   if(currentUser){
    //     await axios.post('https://bistro-boss-server-drab.vercel.app/jwt', { email: currentUser.email })
    //     .then(data => {
    //       // console.log(data.data.token)
    //       localStorage.setItem('access-token', data.data.token)
    //       setUseCartQueryEnabler(true)
         
    //     })
    //   }
    //   else{
    //     localStorage.removeItem('access-token')
    //     setUseCartQueryEnabler(false)
    //   }
      setLoading(false)

        console.log(currentUser)

      });
      return () => {
        return unsubscribe()
      }
  },[])
  const authFunctions = {
    user,
    loading,
    useCartQueryEnabler,
    createUser,
    signIn,
    logOut,
    updateUserProfile,
    googleSignIn
  };
  return (
    <AuthContext.Provider value={authFunctions}>{children}</AuthContext.Provider>
  );
};

export default AuthenticationProviders;