import React, {useState} from "react";
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [

    {
        title: "What is React?",
        content: "React is a frontend javascript framework"
    },

    {
        title: "Why use React?",
        content: "React is a favourite JS librabry among engineers "
    },

    {
        title: "How do you use React?",
        content: "You use React by creating components"
    }
]
    const showAccordion = () => {
        if (window.location.pathname === '/'){
            return <Accordion itemsProps={items}/>
        }
    }
const options =[
    {
        label: "The color Red",
        value: "red"
    },

    {
        label: "The color Green",
        value: "Green"
    },

    {
        label: "The color blue",
        value: "blue"
    }
]

const App = () => {
    return (
    <div>
        {showAccordion()} 
        <Translate />
    </div>
    ) ;
}
export default App;