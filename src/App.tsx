import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {normalize as Normalize} from './styles/normalize'
import {global as Global} from './styles/global';
import styled from "styled-components";
import {Routes} from "./styles/routes";
import {Navigation} from "./navigation/Navigation";
import {authRef} from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Link = styled(NavLink)`
    text-decoration: underline;
    color: blueviolet;
`;

const LogIn = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;

export const Main = () => {
    const [user, setUser] = useState(null)

    const handleLogIn = async () => {
        const user = await signInWithEmailAndPassword(authRef, 'artemPWA@test.com', "123123")
        setUser(user.user);
    }
    console.info('user', user)
    // useEffect(() => {
    //     createUserWithEmailAndPassword(authRef, 'artemPWA@test.com', "123123").then(r => {
    //         console.log('r', r);
    //     });
    // }, [])

    return (
        <div>
            {user ? <Link to={Routes.todolist.path}>TodoList</Link> : (
                <LogIn>
                    <input type="text" placeholder={'login'}/>
                    <input type="text" placeholder={'email'}/>
                    <button onClick={handleLogIn}>Log In</button>
                </LogIn>
            )}
        </div>
    )
}

function App() {
    return (
        <>
            <Global />
            <Normalize />
            <Navigation />
        </>
    );
}

export default App;