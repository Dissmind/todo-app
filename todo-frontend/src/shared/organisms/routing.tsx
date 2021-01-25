import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom"

import {Todos} from "../../features/todos/pages/todos/todos";
import {TodoAdd} from "../../features/todos/pages/todo-add/todo-add";


export const Routing = ({}) => {

    return (
        <BrowserRouter>
            <Switch>

                <Route path={'/todo-add'}>
                    <TodoAdd />
                </Route>

                <Route path={'/'}>
                    <Todos />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}