import React from 'react'
import PaginaInicial from './paginas/PaginaInicial'
Import Nav from './componentes/Nav'


import './App.css'
//componetizar css - só carregar quando chamar o componente para não impactar na performance do site.

function App () {
    return (
        <div>
         <nav />
        <Nav />
        <PaginaInicial />
        </div>

    )
    
}
export default App