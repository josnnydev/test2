import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles.css"
import { ListadoApp } from './ListadoApp'

//import {PrimerComponente} from './PrimerComponente.jsx'
//<PrimerComponente titulo = {4} subtitulo="curso de React" />


//import { ContadorApp } from './ContadorApp.jsx'
//<ContadorApp value={0} />

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   <ListadoApp />
  </React.StrictMode>,
)
