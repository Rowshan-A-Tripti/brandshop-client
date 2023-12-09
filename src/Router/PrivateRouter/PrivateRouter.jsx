import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthPRovider";


const PrivetRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <span className="loading loading-spinner text-secondary"></span>
    }
    if(user) {
        return children
    }
    return <Navigate to={'/login'} state={location.pathname}></Navigate>
};

export default PrivetRouter;