import componentsImg1 from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./component/header.jsx";
import { CoreConcept, CoreConcept2 } from "./component/coreconcept.jsx";
import TabButton from "./component/tabbutton.jsx";

function App() {
  let tabContent = 'for fuck sake , click a button'
  function handleSelect(names) {

    tabContent = names
    console.log("A lot of "+ names +" bitches");
console.log(tabContent)

  }

  console.log('APP COMPONENT EXECUTING');


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
            <TabButton bitches={()=> handleSelect('Component')}>Components</TabButton>
            <TabButton bitches={()=> handleSelect('JSX')}>JSX</TabButton>
            <TabButton bitches={()=> handleSelect('Props')}>Props</TabButton>
            <TabButton bitches={()=> handleSelect('State')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

console.log("balls bad");

export default App;
