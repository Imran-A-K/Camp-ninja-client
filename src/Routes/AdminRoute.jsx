import { Navigate, useLocation } from "react-router-dom";
import useRoleGetter from "../hooks/useRoleGetter";
import useAuthentication from "../hooks/useAuthentication";

const AdminRoute = ({children}) => {
    const [userRole, refetch, isLoading] = useRoleGetter()
    const {user, loading} = useAuthentication();
    let isAdmin = null;
    if(userRole === "admin"){
        isAdmin = true;
    }
    else{
        isAdmin = false
    }
    const location = useLocation();
    if(loading || isLoading){
        <div className="flex mt-60 justify-center">
          <span className="loading loading-bars text-blue-500 loading-xs"></span>
<span className="loading loading-bars text-blue-500 loading-sm"></span>
<span className="loading loading-bars text-blue-500 loading-md"></span>
<span className="loading loading-bars text-blue-500 loading-lg"></span>
        </div>
    }
    if(user && isAdmin){
        return children;
    }
  return <Navigate to='/' state={{from: location}} replace></Navigate>
}

export default AdminRoute