import React, { useState, useEffect } from 'react';
import "../css/profile.css";
import { useHistory } from "react-router-dom";

export const Profile = ()=> {

  let history = useHistory();


const handleForSubmit =  async (e) =>{
    e.preventDefault();

    let path = '/user/' + localStorage.getItem('id') +'/';
    console.log(path);
    try {
    const res = await fetch(path,{
        method: "PUT",
                body: JSON.stringify({
                    first_name: e.target.username.value,
                    second_name: e.target.second_name.value,
                    user_name: e.target.login.value,
                    }),
                    headers: { "Content-type": "application/json"}
    });
    console.log(res.status);
    if (res.status === 200) {
        let result = await res.json();

        localStorage.setItem('login', result.user_name);
        localStorage.setItem('first_name', result.first_name);
        localStorage.setItem('second_name', result.second_name);
        localStorage.setItem('id', result.id);

    history.push("/profile");
    } else {
    console.log(res);
    console.log(localStorage.getItem('login')===true);

    }
    } catch (e) {
    console.log(e);
    }
}

  const [fName, setfName] =  useState(localStorage.getItem('first_name'));
  const [sName, setSName] =  useState(localStorage.getItem('second_name'));
  const [login, setLogin] =  useState(localStorage.getItem('login'));


return (

<main>

    <div class="row">

        <div class="col-md-8">

            <div class="content-section">

                <form enctype="multipart/form-data"  onSubmit={handleForSubmit}>


                    <fieldset class="form-group">
                        <legend class="border-bottom mb-4">Profile Info</legend>


                        <div id="div_id_username" class="form-group"><label for="id_username" class=" requiredField">
                            First Name<span class="asteriskField">*</span> </label>
                            <div class="">
                                <input type="text" name="username" value={fName}  onChange={event => setfName(event.target.value)}  maxlength="150"
                                       class="textinput textInput form-control" required="" id="id_username"/> </div>
                        </div>


                        <div id="div_id_second_name" class="form-group"><label for="id_second_name" class=" requiredField">
                            Last Name<span class="asteriskField">*</span> </label>
                            <div class="">
                                <input type="text" name="second_name" value={sName}
                                       class="textinput textInput form-control" required="" id="id_second_name"  onChange={event => setSName(event.target.value)}/>
                            </div>
                        </div>

                        <div id="div_id_login" class="form-group"><label for="id_login" class=" requiredField">
                            Login<span class="asteriskField">*</span> </label>
                            <div class="">
                                <input type="text" name="login"
                                       class="emailinput form-control" required="" value={login} id="id_email"  onChange={event => setLogin(event.target.value)}/>
                            </div>
                        </div>




                    </fieldset>
                    <div class="form-group">
                                        <button  type='submit'>Update</button>

                    </div>

                </form>
            </div>


        </div>

    </div>

</main>
)

}
