import React, { useState, useEffect } from 'react';
import "../css/register.css";
import { useHistory } from "react-router-dom";


export const Login = ()=> {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
    const[todo, setTodo] = useState([])

  let history = useHistory();

const handleForSubmit =  async (e) =>{
    e.preventDefault();

    try {
    const res = await fetch('/login',{
        method: "POST",
                body: JSON.stringify({
                    login: e.target.username.value,
                    password: e.target.password.value
                    }),
                    headers: { "Content-type": "application/json"}
    });
    console.log(res.status);
    if (res.status === 200) {
        let result = await res.json();

        localStorage.setItem('login', e.target.username.value);
        localStorage.setItem('password', e.target.password.value);
        localStorage.setItem('first_name', result.first_name);
        localStorage.setItem('second_name', result.second_name);
        localStorage.setItem('id', result.id);

    history.push("/home");
    } else {
    console.log(res);
     console.log(localStorage.getItem('login')===true);

    }
    } catch (e) {
    console.log(e);
    }


}
return (
<main>

    <div class="login-page">
        <div class="form" >
            <form class="login-form" onSubmit={handleForSubmit}>
                <input name="username" type="text" placeholder="username"/>
                <input name="password" type="password" placeholder="password"/>

                <button  type='submit'>login</button>

                <p class="message">Not registered? <a href="#">Create an account</a></p>
            </form>

        </div>
    </div>

</main>

    )
    console.log(username);
}