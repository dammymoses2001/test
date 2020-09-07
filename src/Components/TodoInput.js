import React, { Fragment } from 'react';

// const fade ={
//     transition :'2s'
// }
export default function TodoList({lists,getDeleteid,getEditid}){
    console.log(lists)
    const handleDelete = (id) =>{
        getDeleteid(id)
    }
    const handleEdit = (id) =>{
        getEditid(id)
    }
    return(
        <Fragment>
          <table>
          {lists.map(list=>
              <tr key={list.id}>
                  <td className='main'>{list.text}</td>
                  <td> <button onClick={()=>handleEdit(list.id)} >Edit</button> </td>
                  <td> <button onClick={()=>handleDelete(list.id)} >delete</button> </td>
              </tr>
               )}
          </table>
    
      </Fragment>
    )
}
// what goes around comes around my baby what goes around comes back around