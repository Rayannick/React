import componentsImg1 from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./component/header.jsx";
import { CoreConcept, CoreConcept2 } from "./component/coreconcept.jsx";
import TabButton from "./component/tabbutton.jsx";
import { useState } from "react";

console.log("nothing");

function App() {
  // first try :== static value
  let tabContent = "for fuck sake , click a static button";

  // second try :== dynamic value (useState) ====> only "App" function is re-exicuting==>useState" cannot be called at the top level. React Hooks must be called in a React function component
  const [bitches, selectBitch] = useState(
    "for fuck sake , click a dynamic button"
  );
  function handleSelect(names) {
    selectBitch(names);
    tabContent = names;
    console.log("A lot of " + names + " bitches");
    console.log(tabContent);
  }

  console.log("APP COMPONENT EXECUTING");

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
          </ul>
        </section>

        {/* name should be same when passing as a function parameter */}
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton bitch={() => handleSelect("Component")}>
              Components
            </TabButton>
            <TabButton bitch={() => handleSelect("JSX")}>JSX</TabButton>
            <TabButton bitch={() => handleSelect("Props")}>Props</TabButton>
            <TabButton bitch={() => handleSelect("State")}>State</TabButton>
          </menu>
          {tabContent}
          <br />
          {bitches}
        </section>
      </main>
    </div>
  );
}

console.log("balls bad");

export default App;
