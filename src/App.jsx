
import { useState } from 'react';

import { CORE_CONCEPTS } from './data.js';
import Header from './component/Header.jsx';
import { CoreConcept, CoreConcept2 } from "./component/coreconcept.jsx";
import TabButton from "./component/tabbutton.jsx";
import { EXAMPLES } from './data.js';
import componentsImg1 from "./assets/components.png";


console.log("nothing");

function App() {
  // first try :== static value
  let tabContent = "for fuck sake , click a static button";

  // second try :== dynamic value (useState) ====> only "App" function is re-exicuting==>useState" cannot be called at the top level. React Hooks must be called in a React function component
  
     const [bitches, updatedBitches] = useState();



  function handleSelect(names) {
    updatedBitches(names)
    // tabContent = names;
    console.log("A lot of " + names + " bitches");
    // console.log(tabContent);
    console.log(bitches);
  }

  

  if(bitches){
tabContent = (
  <div id="tab-content">
  <h3>{EXAMPLES[bitches].title}</h3>
  <p>{EXAMPLES[bitches].description}</p>
  <pre>
    <code>{EXAMPLES[bitches].code}</code>
  </pre>
</div>
)
  }

  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>time to get started</h2>

          <ul>
            <CoreConcept
              title="components"
              description="the core UI building block"
              image={componentsImg1}
            />

            <CoreConcept2
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />

            {/* holy SHIT */}

            <CoreConcept2 {...CORE_CONCEPTS[2]} />

            {CORE_CONCEPTS.map((conceptItem)=> <CoreConcept2 key={conceptItem.title} {...conceptItem}/>)}
          </ul>
        </section>

        {/* name should be same when passing as a function parameter */}
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* this result will goes to the frame like tabbutton.jsx */}
            <TabButton isSelected={bitches === 'components'} onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton isSelected={bitches === 'jsx'} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={bitches === 'props'} onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={bitches === 'state'} onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {tabContent}
          <br />
       
       

        </section>
      </main>
    </div>
  );
}

console.log("balls bad");

export default App;

