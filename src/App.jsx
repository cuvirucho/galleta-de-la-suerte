
import { useState } from 'react'
import './App.css'
import fraserando from './utilis/Fraserand'
import pharases from './utilis/phrase.json'
import Pharacard from './compinets/Pharacard'
import Actibtn from './compinets/Actibtn'
import imgcont from './utilis/imgcont.json'
import './index.css'
function App() {

  /*frqase*/
const govalue = fraserando (pharases)
const [incialrandon, setfrsesrando] = useState(govalue) 
/*im*/
const imgini = fraserando (imgcont)
const [imgs, setimg] = useState(imgini)



const objstle = {
  backgroundImage: `url("public/fondo${imgs}.jpg")`
}

  return ( 
    <div className='content__max' style={objstle}>
      <h1 className='content__title' >Tu galleta de la fortuna</h1>
      <article  className='contenta__max' >
         <Pharacard  frase={incialrandon} />
      <Actibtn  
      setfrsesrando ={setfrsesrando}
      setimg ={setimg}/>
      </article>
    </div>
  )
}

export default App
