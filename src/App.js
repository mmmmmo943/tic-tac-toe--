import { useState } from 'react';
import './App.css';
import Square from "./components/square"

function App() {
  const [board,setBoard] =useState(["","","","","","","","","",""]);
  const [player,setPlayer]=useState("X");

  const selectSquare=(square)=>{
     setBoard(
      board.map((val,idx)=>{
        if(idx==square&&val==""){
          return player;
        }
        return val;
      })
     );

     if (player=="X"){
      setPlayer("O");
     }else{
      setPlayer("X");
     }
  }
  return (
    <div className="App">
      <div className='board'>
        <div className='row'>
          <Square val={board[0]}
           selectSquare={()=>{selectSquare(0)}}/>
           <Square val={board[1]}
           selectSquare={()=>{selectSquare(1)}}/>
           <Square val={board[2]}
           selectSquare={()=>{selectSquare(2)}}/>
        </div>
        <div className='row'>
        <Square val={board[3]}
           selectSquare={()=>{selectSquare(3)}}/>
           <Square val={board[4]}
           selectSquare={()=>{selectSquare(4)}}/>
           <Square val={board[5]}
           selectSquare={()=>{selectSquare(5)}}/>
        </div>
        <div className='row'>
        <Square val={board[6]}
           selectSquare={()=>{selectSquare(6)}}/>
           <Square val={board[7]}
           selectSquare={()=>{selectSquare(7)}}/>
           <Square val={board[8]}
           selectSquare={()=>{selectSquare(8)}}/>
        </div>
      </div>
    </div>
  );
}

export default App;
