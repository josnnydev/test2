import "./styles/PrimerComponente.css" 
import PropTypes from 'prop-types';

const string = "josnny"
const number = 123456
const array = ["curso de react", "youtube", 4, 1000]
const boolean = true
const funcion = ()=> 1+1
const objecto = {nombre: "curso de js", duracion: 8}
const fecha = new Date()



export const PrimerComponente = ({titulo,subtitulo}) => {
  console.log(titulo)
  return (
    <>
    <h1>{titulo}</h1>
    <h2>{subtitulo}</h2>
       <h1>Variables en jsx</h1>
       <h4>variable tipo string</h4> <p>{string}</p>
       <h4>variable tipo number</h4> <p>{number}</p>
       <h4>variable tipo array</h4> <p>{array}</p>
       <h4>variable tipo boolean</h4> <p>{boolean}</p>
       <h4>variable tipo funcion</h4> <p>{funcion()}</p>
       <h4>variable tipo objecto</h4> <p>{JSON.stringify(objecto)}</p>
       <h4>variable tipo fecha</h4> <p>{JSON.stringify(fecha)}</p>


    </>
   
      
  )
}

PrimerComponente.propTypes = {
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string.isRequired
}

PrimerComponente.defaultProps ={
  titulo: "cursoooo"
}
 
