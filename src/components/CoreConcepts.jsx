import  {CORE_CONCEPTS} from "../data.js";
import CoreConcept from "./CoreConcept";

function CoreConcepts(){

    return (  <section id="core-concepts">
    <h2>Core Concepts!</h2>
      <ul> 

        {
        // Dynamically display multiple components based on array of objects
        CORE_CONCEPTS.map((conceptItem)=> <CoreConcept key={conceptItem.title} {...conceptItem}/>)
        //you must set a key that is unique on each object in the array
        }
        
        
      </ul>
      </section>
      );
}

export default CoreConcepts;