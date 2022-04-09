import React, {useState} from "react";
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header"


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
];  

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

const App = () => {
    const [selected, setSelected] = useState(options[0]);

    return (
    <div>
      <Header/>
        <Route path="/">
            <Accordion itemsProps={items} />
       </Route>

       <Route path="/list">
            <Search  />
       </Route> 

       <Route path="/dropdown">
            <Dropdown
            path="/dropdown" 
            label="Select a color"
            options={options}
            selected={selected}
            onSelectedChange={setSelected}
            
            />
       </Route> 

       <Route path="/translate">
            <Translate />
       </Route>
       
    </div>
    );
}
export default App;

