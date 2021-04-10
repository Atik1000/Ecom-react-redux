import React from 'react';
import {Route,Redirect} from 'react-router-dom';

const PrivateRoute = ({children,...rest}) => {
    const isauth =false
    return (
        <Route {...rest} render={()=>isauth?(children):(<Redirect to={'/'}/>)}/>
            
       
    );
};

export default PrivateRoute;