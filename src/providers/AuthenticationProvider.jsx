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
  const [queryEnabler, setQueryEnabler] = useState(false);
  const [nav, setNav] = useState(false);

  const registerUser = (email, password) => {
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
        
      if(currentUser){
        await axios.post('http://localhost:4000/jwt', { email: currentUser.email })
        .then(data => {
          localStorage.setItem('access-token', data.data.token)
          setQueryEnabler(true)
        })
        
      }
      else{
        localStorage.removeItem('access-token')
        setQueryEnabler(false)
      }
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
    registerUser,
    signIn,
    logOut,
    updateUserProfile,
    googleSignIn,
    queryEnabler,
    nav,
    setNav
  };
  return (
    <AuthContext.Provider value={authFunctions}>{children}</AuthContext.Provider>
  );
};

export default AuthenticationProviders;