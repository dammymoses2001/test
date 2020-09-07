import React, { Component } from 'react';
import './App.css';

import TodoInput from './Components/TodoInput';


const initialState={
    id:'',
    text:'',
    date:''
  
}
export default class App extends Component{
  state={
    list :[{id:1,text:'name'},{id:2,text:'name2'}],
    todos:{
      id:'',
      text:'',
      date:''
    },
    edit:false
  }

  
  handleChange = (event) =>
   this.handletodo(event.target.value)
    

  handletodo= (text) =>{
    this.setState(Object.assign(this.state.todos,{text}))
    // this.setState({
    //   todos:{
    //     text
    //   }
    // })
  }
  handleSubmit = () =>{
    const id=Date.now();
    this.setState({
      list:[...this.state.list,{...this.state.todos,id}],
      todos:initialState
    })
console.log(this.state.list)
  }
  handleDelete = (id) =>{ 
    const list =this.state.list.filter(list=>list.id !== id);
    this.setState({
      list,
    })
  }
  getEditid = (id) =>{
    const todos =this.state.list.find(list=>list.id === id);
    console.log(todos)
    this.setState({
      todos,
      edit:true
    })
  }

  handleEdit = () => {
    const todos =this.state.list.filter(list=>list.id !== this.state.todos.id);
    console.log(this.state.todos)
    console.log(...todos,this.state.todos)
    this.setState({
      list:[...todos,this.state.todos],
      edit:false,
      todos:initialState
    })
    
  }

render(){
  const {list,edit} = this.state;
  console.log(this.state.list)
  return (
    <div className='App'>
        <h2></h2>
      <div className='input'>
      <input
      className='inputbox' 
      type='text'
      value={this.state.todos.text}
      placeholder='Enter your dos...'
      onChange={this.handleChange}
      autoFocus
      />
      {edit ? <button onClick={this.handleEdit} style={{background:'green'}}>Edit</button>:<button onClick={this.handleSubmit}>Add</button>}
      
      </div>
      <TodoInput lists={list} getDeleteid={this.handleDelete} getEditid={this.getEditid}/>
    </div>
  )
}
};