import React from 'react';
import { userSelectors } from "src/store/selectors/userSelectors";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}: any) => {
    const { username } = useSelector(userSelectors.getUserInfo);

    return username ? children : <Navigate to='/'/>
};

export default PrivateRoute;