import React, { Component } from 'react';
import './App.css';
import './components/TodoItem'
import TodoItem from './components/TodoItem';

// class App extends Component {
//   constructor() {
//     super();
//     this.TodoItems = [
//       'thien',
//       'di',
//       'hoc'
//     ];
//   }

//   render() {
//     return(
//       <div className="App">    
//       {
//         this.TodoItems.map((item) => <TodoItem title ={item} />)
//       }
//       </div>
//     );
//   }
// }

function App() {
  const TodoItems = [
    {title:'Dắt người yêu đi chơi', isComplete: true},
    {title:'Vá lốp xe', isComplete: false},
    {title:'Đi về', isComplete:true}
  ];
  return (
    <div className="App">    
      {
        TodoItems.length > 0 && TodoItems.map((item,i) => 
        <TodoItem item={item} key={i} />)
      }

      {
        TodoItems.length === 0 && 'Nothing to show.'
      }
    </div>
  );
}

export default App;
