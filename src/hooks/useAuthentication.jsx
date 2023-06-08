import { useContext } from "react";
import { AuthContext } from "../providers/AuthenticationProvider";

const useAuthentication = () => {
    const authFunctions = useContext(AuthContext);
     return authFunctions;
}

export default useAuthentication