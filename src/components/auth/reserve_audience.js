import React, { useState, useEffect } from 'react';
import "../css/style.css";
import "../css/reserve.css";

import { useHistory } from "react-router-dom";


export const Reservation = ()=> {

const handleForSubmit =  async (e) =>{
    e.preventDefault();
    console.log(localStorage.getItem('id'));
    console.log(localStorage.getItem('auditory_id'));

    console.log(e.target.fromDate.value);
    console.log(e.target.toDate.value);

    try {
    const res = await fetch('/reservation/',{
        method: "POST",
                body: JSON.stringify({
                    user_id: localStorage.getItem('id'),
                    audience_id: localStorage.getItem('auditory_id'),
                    from_date: e.target.fromDate.value,
                    to_date: e.target.toDate.value
                    }),
                    headers: { "Content-type": "application/json"}
    });
    console.log(res.status);
    if (res.status === 200) {
        let result = await res.json();
        alert( 'Successful reserved' );
    }
    else if (res.status === 405){
        alert( 'You have entered incorrect data!' );

     }
     else {
    console.log(res)}
    } catch (e) {
    console.log(e);
    }
}


        return(
         <form class="register-form" onSubmit={handleForSubmit}>
             <div id="div_id_username" class="form-group"><label for="id_username" class=" requiredField">
                                From date<span class="asteriskField"></span> </label>
                                <div><input name="fromDate" type="text" /></div>
              </div>
                <div id="div_id_username" class="form-group"><label for="id_username" class=" requiredField">
                                To date<span class="asteriskField"></span> </label>
                                <div><input name="toDate" type="text" /></div>
              </div>
                 <button type='submit'>reserve</button>
          </form>

        )

}