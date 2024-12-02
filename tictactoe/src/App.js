import { useState } from "react";
import "./App.css";

function App() {
  const [tictoedata, settictoedata] = useState([
    { id: 1, data: "" },
    { id: 2, data: "" },
    { id: 3, data: "" },
    { id: 4, data: "" },
    { id: 5, data: "" },
    { id: 6, data: "" },
    { id: 7, data: "" },
    { id: 8, data: "" },
    { id: 9, data: "" },
  ]);
  const[cnt,setcnt]=useState(0);
  console.log(tictoedata);

  function checkwin(logo){
    if(logo=="❌"){
      if(tictoedata[0].data=="❌" && tictoedata[1].data=="❌" && tictoedata[2].data=="❌" ){
        alert("Player 1 won!")
      }
      else if(tictoedata[3].data=="❌" && tictoedata[4].data=="❌" && tictoedata[5].data=="❌" ){
        alert("Player 1 won!")
      }
     else  if(tictoedata[6].data=="❌" && tictoedata[7].data=="❌" && tictoedata[8].data=="❌" ){
        alert("Player 1 won!")
      }
      else if(tictoedata[0].data=="❌" && tictoedata[3].data=="❌" && tictoedata[6].data=="❌" ){
        alert("Player 1 won!")
      }
      else if(tictoedata[1].data=="❌" && tictoedata[4].data=="❌" && tictoedata[7].data=="❌" ){
        alert("Player 1 won!")
      }
      else if(tictoedata[2].data=="❌" && tictoedata[5].data=="❌" && tictoedata[8].data=="❌" ){
        alert("Player 1 won!")
      }
      else if(tictoedata[0].data=="❌" && tictoedata[4].data=="❌" && tictoedata[8].data=="❌" ){
        alert("Player 1 won!")
      }
      else if(tictoedata[2].data=="❌" && tictoedata[4].data=="❌" && tictoedata[6].data=="❌" ){
        alert("Player 1 won!")
      }
      else if(cnt==8){
        alert("No one won :'( ")
        settictoedata([
          { id: 1, data: "" },
          { id: 2, data: "" },
          { id: 3, data: "" },
          { id: 4, data: "" },
          { id: 5, data: "" },
          { id: 6, data: "" },
          { id: 7, data: "" },
          { id: 8, data: "" },
          { id: 9, data: "" },
        ]);
        setcnt(0)
      }
    }
    else if(logo=="⭕"){
      if(tictoedata[0].data=="⭕" && tictoedata[1].data=="⭕" && tictoedata[2].data=="⭕" ){
        alert("Player 2 won!")
      }
      else if(tictoedata[3].data=="⭕" && tictoedata[4].data=="⭕" && tictoedata[5].data=="⭕" ){
        alert("Player 2 won!")
      }
     else  if(tictoedata[6].data=="⭕" && tictoedata[7].data=="⭕" && tictoedata[8].data=="⭕" ){
        alert("Player 2 won!")
      }
      else if(tictoedata[0].data=="⭕" && tictoedata[3].data=="⭕" && tictoedata[6].data=="⭕" ){
        alert("Player 2 won!")
      }
      else if(tictoedata[1].data=="⭕" && tictoedata[4].data=="⭕" && tictoedata[7].data=="⭕" ){
        alert("Player 2 won!")
      }
      else if(tictoedata[2].data=="⭕" && tictoedata[5].data=="⭕" && tictoedata[8].data=="⭕" ){
        alert("Player 2 won!")
      }
      else if(tictoedata[0].data=="⭕" && tictoedata[5].data=="⭕" && tictoedata[8].data=="⭕" ){
        alert("Player 2 won!")
      }
      else if(tictoedata[2].data=="⭕" && tictoedata[4].data=="⭕" && tictoedata[6].data=="⭕" ){
        alert("Player 2 won!")
      }
      else if(cnt==8){
        alert("No one won :'( ")
        settictoedata([
          { id: 1, data: "" },
          { id: 2, data: "" },
          { id: 3, data: "" },
          { id: 4, data: "" },
          { id: 5, data: "" },
          { id: 6, data: "" },
          { id: 7, data: "" },
          { id: 8, data: "" },
          { id: 9, data: "" },
        ]);
        setcnt(0)
      }
    }
  }

  function handleClick(id){
    console.log(id)
    if(tictoedata[id-1].data=="⭕" || tictoedata[id-1].data=="❌"){
      console.log("returning")
      return;
    }
    if(cnt%2==0){
      let obj=tictoedata;
      obj[id-1].data="❌";
      settictoedata(obj);
      setcnt((cnt)=>cnt+1)
      checkwin("❌");
    }else{
      let obj=tictoedata;
      obj[id-1].data="⭕";
      settictoedata(obj);
      setcnt((cnt)=>cnt+1)
      checkwin("⭕");
    }


  }

  function reset(){
    settictoedata([
      { id: 1, data: "" },
      { id: 2, data: "" },
      { id: 3, data: "" },
      { id: 4, data: "" },
      { id: 5, data: "" },
      { id: 6, data: "" },
      { id: 7, data: "" },
      { id: 8, data: "" },
      { id: 9, data: "" },
    ]);
    setcnt(0);
  }
  return (
    <>
      <div className="container">
        <div className="player-box">
          <div className="playerone">Player 1 :❌</div>
          <div className="playertwo">Player 2 :⭕</div>
        </div>
        <div className="activeplayer">Active Player {cnt%2==0?"❌":"⭕"} </div>
        <button className="reset" onClick={reset}>Reset!</button>
        <div className="row">
          <div className="col" id="1" onClick={()=>handleClick(1)}>
            {tictoedata[0].data}
          </div>
          <div className="col" id="2" onClick={()=>handleClick(2)}>
            {tictoedata[1].data}
          </div>
          <div className="col" id="3" onClick={()=>handleClick(3)}>
            {tictoedata[2].data}
          </div>
        </div>
        <div className="row">
          <div className="col" id="4" onClick={()=>handleClick(4)}>
            {tictoedata[3].data}
          </div>
          <div className="col" id="5" onClick={()=>handleClick(5)}>
            {tictoedata[4].data}
          </div>
          <div className="col" id="6" onClick={()=>handleClick(6)}>
            {tictoedata[5].data}
          </div>
        </div>
        <div className="row">
          <div className="col" id="7" onClick={()=>handleClick(7)}>
            {tictoedata[6].data}
          </div>
          <div className="col" id="8" onClick={()=>handleClick(8)}>
            {tictoedata[7].data}
          </div>
          <div className="col" id="9" onClick={()=>handleClick(9)}>
            {tictoedata[8].data}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
