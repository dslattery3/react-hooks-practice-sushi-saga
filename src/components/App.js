import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [wallet, setWallet] = useState(100)
  const [tummy, setTummy] = useState([])
 
  useEffect(() => {
    fetch(API).then(r=>r.json()).then(setSushis) }, [])

  const eatSushi = sushi => {

    if(wallet >= sushi.price){
      setWallet(wallet - sushi.price)

      const newSushis = [...sushis]
      const index = newSushis.findIndex(s => s.id === sushi.id)
      newSushis[index].eaten = true
      setSushis(newSushis)

      const newTummy = [...tummy]
      newTummy.push(sushi)
      setTummy(newTummy)
    }
  }

  const gamble = () => {
      let newMoney = Math.floor(Math.random() * 100)
      if (newMoney > 80 || newMoney < 20){
        newMoney = newMoney * -1
      }
      setWallet(wallet + newMoney)
    }

  return (
    <div className="app">
      <SushiContainer sushis={sushis} eatSushi={eatSushi} gamble={gamble}/>
      <Table wallet={wallet} plates={tummy}/>
    </div>
  );
}

export default App;
