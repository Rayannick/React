import reactImg from '../assets/react-core-concepts.png';
import  './header.css';
// class 01:===creating component is like creating function and return

const quality = ['Suck','Fuck','Luck','Duck','Cuck','Puck']



function genRandomInt(max){
  return Math.floor(Math.random() * (max))
}

const word = quality[genRandomInt(6)]

export default function Header (){
return(
  <header>
  <img src={reactImg} alt="styled atom" />
  <h1>{word} React Essentials</h1>
  <p>
    Fundamental react concepts you will need for almost any app you are going to build ! 
  </p>
</header>
)

}
