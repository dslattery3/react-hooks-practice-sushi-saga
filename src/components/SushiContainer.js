import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, eatSushi, gamble}) {
  const [display, setDisplay] = useState(0)
  const addFour = () => {
    const newIndex = display + 4
    if (!sushis[newIndex +4]){
      setDisplay(0)
    }
    else{
      setDisplay(newIndex)
    }
  }

  const fourToShow = sushis.slice(display, display + 4)
  return (
    <div className="belt">
      <button onClick ={gamble}>More Money</button>
      {fourToShow.map((sushi) => <Sushi key={sushi.id} eatSushi={eatSushi} sushi={sushi}/>)}
      <MoreButton addFour={addFour}/>
    </div>
  );
}

export default SushiContainer;
