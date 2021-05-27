import React, { useState, useEffect } from 'react';
import {Card} from '../components/Card/card';
import "./style.css";

export const TodoPage = ()=> {

    const[todo, setTodo] = useState([])

    useEffect(() => {
        fetch('/api').then(res => res.json()).then(data => setTodo(data))
    })

    return (
        <>
           <main>
                <Card listOfTodos={todo} />
           </main>

    </>
    )

}