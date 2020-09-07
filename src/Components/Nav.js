import React from 'react';

export default function Navigation({Selection}){
    return(
        <div className='Nav'>
            <button onClick={()=>Selection('simpleTodo')}>Simple TodoList</button>
            <button onClick={()=>Selection('advanceTodo')}>Advance TodoList</button>
        </div>
    )
}