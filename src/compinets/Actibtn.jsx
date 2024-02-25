import fraserando from "../utilis/Fraserand"
import frases from '../utilis/phrase.json'
import imgcont from '../utilis/imgcont.json'
import '../index.css'

const btnactive = ({setfrsesrando, setimg}) => {

  const clik = () => {

    const fra = fraserando(frases)

    setfrsesrando(fra)

    const img = fraserando(imgcont)
    setimg(img) 
   }
  return (
    <button className="conte__btn" onClick={clik}>Descubre tu fortuna</button>
  )
}

export default btnactive