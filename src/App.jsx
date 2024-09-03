import componentsImg1 from './assets/components.png';
import { CORE_CONCEPTS  } from './data.js';
import Header from './component/header.jsx';
import { CoreConcept , CoreConcept2 } from './component/coreconcept.jsx';
import TabButton from './component/tabbutton.jsx';



function App(){
  function handleSelect(){
    console.log('A lot of bitches')
  }
  return (
    <div>
<Header></Header>
      <main>
        <section id="core-concepts">
        <h2>time to get started</h2>

          <ul>
            <CoreConcept 
            title = 'components'
            description = 'the core UI building block'
            image = {componentsImg1}

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

        <section id='examples'>
          <h2>Examples</h2>
          <menu>
          <TabButton onSelect={handleSelect} >Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>     
            
                 </menu>
        </section>
      </main>
    </div>
  )
}

console.log('balls bad')

export default App;









