import React from 'react'

export const Card = ({listOfTodos})=>  {
    return(
    <>
     <div class="advantages_container">
            <div class="advanteges">
    {listOfTodos.map(todo=> {
        return(

                <div class="advanteges_item">
                        <h2>Audience {todo.name}</h2>
                        <a href="#" class="button">Reserve audience</a>
                </div>
        )
    })}

            </div>
        </div>


    </>
    )
}