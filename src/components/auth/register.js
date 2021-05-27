import React, { useState, useEffect } from 'react';
import "../css/register.css";
import { useHistory } from "react-router-dom";

export const Register = ()=> {

let history = useHistory();

const handleForSubmit =  async (e) =>{
    e.preventDefault();
    try {
    const res = await fetch('/user/',{
        method: "POST",
                body: JSON.stringify({
                    first_name: e.target.first_name.value,
                    second_name: e.target.second_name.value,
                    user_name: e.target.user_name.value,
                    password: e.target.password.value
                    }),
                    headers: { "Content-type": "application/json"}
    });
    console.log(res.status);
    if (res.status === 200) {
        let result = await res.json();

        localStorage.setItem('first_name', e.target.first_name.value);
        localStorage.setItem('second_name', e.target.second_name.value);
        localStorage.setItem('login', e.target.user_name.value);
        localStorage.setItem('password', e.target.password.value);
        localStorage.setItem('id', result.id);

    history.push("/home");
    } else {
    console.log(res)}
    } catch (e) {
    console.log(e);
    }


}
return (
<main>
    <div class="login-page">
        <div class="form">
            <form class="register-form" onSubmit={handleForSubmit}>

                <input name="first_name" type="text" placeholder="first_name" id="first_name"/>
                <input name="second_name" type="text" placeholder="second_name" id="second_name"/>
                <input name="user_name" type="text" placeholder="user_name" id="user_name"/>
                <input name="password" type="password" placeholder="password" id="password"/>

                <button type='submit'>create</button>

                <p class="message">Already registered? <a href="#">Sign In</a></p>
            </form>
        </div>

    </div>

</main>

    )
}
