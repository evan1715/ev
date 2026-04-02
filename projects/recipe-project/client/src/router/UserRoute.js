import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

/**
 * Authentication guard component. Renders children if authenticated,
 * otherwise redirects to the home page.
 *
 * @param {{ children: React.ReactNode }} props
 */
const UserRoute = ({ children }) => {
    const isAuth = useSelector((state) => state.accountReducer.authenticated);

    return isAuth ? children : <Navigate to="/" replace />;
};

export { UserRoute as default };
