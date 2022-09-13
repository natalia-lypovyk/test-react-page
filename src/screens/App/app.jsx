import React, {useState} from "react";
import Header from "../../components/Header/header";
import SearchInput from "../../components/SearchInput/searchInput";
import Accordion from "../../components/Accordion/accordion";
import {accordionData} from "../../constats/tableData";
import LoadButton from "../../components/Load/loadButton";


const App = ()=>{
    const [selected, setSelected] = useState(null)
    const [amount, setAmount] =useState(3)
    let count = 0;
    const [filter, setFilter] = useState(true)
    console.log(amount, accordionData.filter(value => value.status ===filter).length)

    return (
        <div className="app">
            <Header/>
            <SearchInput filter={filter} setFilter={setFilter}/>
            <div style={{marginTop:'40px', marginBottom:amount === accordionData.filter(value => value.status ===filter).length && '100px'}}>
                {accordionData.map((value, index)=> {
                    if (value.status === filter) {
                        if (count <= amount) {
                            count++;
                            return (
                                <Accordion selected={selected} setSelected={setSelected} data={value} index={index + 1}
                                           key={index}/>)
                        }
                    }
                })}
            </div>
            {amount !== accordionData.filter(value => value.status ===filter).length &&  (<LoadButton length={accordionData.length} amount={amount} setAmount={setAmount}/>)}
        </div>
    )
}
export default  App;
