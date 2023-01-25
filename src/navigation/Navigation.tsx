import {AppRoute} from "./Route";
import {Todolist} from "../apps/todolist/Todolist";
import {Switch} from "react-router-dom";
import React from "react";
import {Main} from "../App";
import { Routes } from "../styles/routes";

export const Navigation = () => (
    <Switch>
        <AppRoute path="/" exact component={Main}/>
        <AppRoute path={Routes.todolist.path} component={Todolist} />
    </Switch>
)