import { useState,useEffect } from 'react';
import './App.css';
import Square from "./components/square";
import {Patterns}from"./components/patterns";

function App() {
  const [board,setBoard] =useState(["","","","","","","","","",""]);
  const [player,setPlayer]=useState("X");
  const [result,setResult]=useState({winner:"none",state:"none"});


  useEffect(()=>{
    win();
    if (player=="X"){
      setPlayer("O");
     }else{
      setPlayer("X");
     }
  },[board]);
  useEffect(()=>{
    if(result.state!="none"){alert(`winner is : ${result.winner}`)}
  },[result]);

  const selectSquare=(square)=>{
     setBoard(
      board.map((val,idx)=>{
        if(idx==square&&val==""){
          return player;
        }
        return val;
      })
     );


  };
  const win=()=>{
    Patterns.forEach((currPattern)=>{
      const firstPlayer=board[currPattern[0]];
      if(firstPlayer=="") return;
      let foundWinningPattern=true;
      currPattern.forEach((idx)=>{
        if(board[idx]!=firstPlayer){
          foundWinningPattern=false
        }
      })
      if(foundWinningPattern){
         setResult({winner:player,state:"won"})
      }
    })
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
