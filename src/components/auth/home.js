import React, { useState, useEffect } from 'react';
import "../css/style.css";
import { useHistory } from "react-router-dom";

export const Main = ()=> {
  let history = useHistory();

    const[audience, setAudience] = useState([])
    const[count, setCount] = useState(0)
   const [idAud, setidAud] =  useState(0);



const handleForSubmit =  async (e) =>{
    e.preventDefault();
    localStorage.setItem('auditory_id', idAud);
    history.push("/reservation");

//        let result = await res.json();
//
//        localStorage.setItem('auditory_id', e.target.username.value);
//
//
//    history.push("/profile");



}

useEffect(() => {
        fetch('/audience/').then(res => res.json()).then(data => setAudience(data))
    })

    return (
        <>
           <main>
        <div class="advantages_container">
            <div class="advanteges">
        {audience.map(aud=> {
        return(

                    <div class="advanteges_item"  >
                        <form class="login-form" onSubmit={handleForSubmit}>
                            <div name={aud.id}>
                            <h2>Audience</h2>
                            <p>Location: {aud.location} 12</p>
                            <p>Size: {aud.size} кв.м</p>
                            <p>Capasity: {aud.capacity}</p>
                        <button class="button" type='submit' onClick={event => setidAud(aud.id)}> Reserve audience</button>
                        </div>
                        </form>

                    </div>


        )
    })}



            </div>
        </div>
    </main>

    </>
    )

}