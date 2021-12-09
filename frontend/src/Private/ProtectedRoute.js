
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ component: Component, ...rest }) => {
    
    const auth = useSelector((state) => state.auth);
    
    return (
        <Route
            {...rest}
            render={(props) =>
                
                (auth.isAuth && ((auth.user.role ==="Doctor" )||(auth.user.role ==="Admin" )))? <Component {...props} /> :<Redirect to="/login" /> 
            }
        />
    );
};

export default ProtectedRoute;