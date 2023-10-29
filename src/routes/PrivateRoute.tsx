import React from 'react';
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectors } from 'src/store/selectors/selctors';

const PrivateRoute = ({children}: any) => {
    const { username } = useSelector(selectors.getUserInfo);

    return username ? children : <Navigate to='/'/>
};

export default PrivateRoute;