import React from "react";
import './loadButton.css'
import Replay from "../../assets/svg/replay";

const LoadButton = ({length, amount, setAmount})=>{
    const extraAmount = 4;
    const loadText = 'Load more'
    const toggle= ()=>{
    const sum = extraAmount+amount;
    const difference = length - amount

        if( sum < length){
            return setAmount(sum-1)
        }
        if( difference >= 0 ){
            return setAmount(length-1)
        }
    }
    return (
        <div className={'loadButtonContainer'} onClick={()=>toggle()}>
            <Replay/>
            <span className={'loadText'}>{loadText}</span>
        </div>
    )
}
export default  LoadButton;
