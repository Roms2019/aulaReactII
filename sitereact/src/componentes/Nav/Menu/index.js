import React from 'react';
import './styles.css'
//fazer componente de class porque não é uma função
class menu extends React.Component {
    constructor(porps) {
    super(props)
    this.state = {
        aberto: false

    }
    handleAbreouFecha = e => {
        this.setState(prevStage => {
            return {aberto: !prevState.aberto}
        })
    }
}
render (){
    let classesDasOpcoes = 'navbar-menu_opcoes'
    let classesDoBotao = 'navbar-menu__botao'

    if(this.state.aberto){
        classesDasOpcoes += ' navbar-menu__opcoes--aberto'
        classesDoBotao += ' navbar-menu__botao--aberto,'
    }

    return(
    <div className='nav-menu navbar-links'>
    <span className= {classesDoBotao} onClick={this.hanleAbreOuFecha}>
    Menu
    </span>
    <ul className={classesDasOpcoes}>
    <li>Home</li>
    <li>Contato</li>
    <li>Mensagens</li>
    </ul>
    </div>
    )
}
}
//diferenciação do mobile e desktop é feita no css
}