import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import {CORE_CONCEPTS} from "./data.js";
import {EXAMPLES} from "./data.js";
import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  // useState always returns an array object that contains 2 items
  // The value and the function that runs the component again
  
  function handleSelect(selectedButton){
    
    //The line of code below is a function that updates the "selectedTopic" value
    setSelectedTopic(selectedButton);
  
  }
    //Displays the selected object
    console.log("Executing");

    //Initializing the tabcontent
    let tabContent =  <p>Please select a topic.</p>; 

    //Conditionally displaying the selected topic to the tab content
    if (selectedTopic){
      tabContent = ( 
                    <div id="tab-content">
                      <h3>  {EXAMPLES[selectedTopic].title} </h3>
                      <p >{EXAMPLES[selectedTopic].description}</p>
                      <pre>
                        <code>{EXAMPLES[selectedTopic].code} </code>
                      </pre>
                      
                    </div>) ;

    }
   
 

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts!</h2>
          <ul> 
            <CoreConcept title = {CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}/>
            <CoreConcept  {...CORE_CONCEPTS[1]}/>
            <CoreConcept  {...CORE_CONCEPTS[2]}/>
            <CoreConcept  {...CORE_CONCEPTS[3]}/>
            
          </ul>
          </section>
          <section id="examples">
            <h2>Examples</h2>
            <menu>
              <TabButton onSelect={()=> handleSelect('components')}>Components</TabButton>
              <TabButton onSelect={()=> handleSelect('jsx')}>JSX</TabButton>
              <TabButton onSelect={()=> handleSelect('props')}>Props</TabButton>
              <TabButton onSelect={()=> handleSelect('state')}>State</TabButton>

            </menu>
          
            {tabContent}
 
          </section>

      </main>
    </div>
  );
}

export default App;