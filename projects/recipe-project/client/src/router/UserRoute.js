import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserRoute = ({ component: Component, ...rest }) => {
    const isAuth = useSelector((state) => state.accountReducer.authenticated);

    return (
        <Route {...rest} component={(props) => (isAuth ? <Component {...props} /> : <Redirect to="/" />)} />
    );
};

export { UserRoute as default };
