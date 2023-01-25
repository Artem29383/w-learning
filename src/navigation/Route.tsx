import React from "react";
import {RouteProps} from "react-router";
import {Route} from "react-router-dom";

interface TProps extends RouteProps {
    component: React.ComponentType<any> | React.ComponentType;
    path: string;
}

export const AppRoute = ({
 path,
 component: Component,
 ...rest
}: TProps) => {
    // const authorized = useAuthorized();
    // if (authorized === null && auth) {
    //     return <Redirect to='/'/>;
    // }

    return (
        <Route path={path} exact {...rest}>
            <Component />
        </Route>
    );
};