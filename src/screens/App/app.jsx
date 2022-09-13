import React, {useState} from "react";
import Header from "../../components/Header/header";
import SearchInput from "../../components/SearchInput/searchInput";
import Accordion from "../../components/Accordion/accordion";
import {accordionData} from "../../constats/tableData";
import LoadButton from "../../components/Load/loadButton";


const App = ()=>{
    const [selected, setSelected] = useState(null)
    const [amount, setAmount] =useState(3)
    console.log(amount, accordionData.length)

    return (
        <div className="app">
            <Header/>
            <SearchInput/>
            <div style={{marginTop:'40px', marginBottom:amount+1 === accordionData.length && '100px'}}>
                {accordionData.map((value, index)=> {
                    if (index <= amount){
                        return ( <Accordion selected={selected} setSelected={setSelected} data={value} index={index + 1} key={index}/>)
                    }
                })}
            </div>
            {amount+1 != accordionData.length &&  (<LoadButton length={accordionData.length} amount={amount} setAmount={setAmount}/>)}
        </div>
    )
}
export default  App;
