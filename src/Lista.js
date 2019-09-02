import React, { Component } from 'react';

import Unidade from './Unidade.js';

const lista = [
  { id: 1, nome: "andre", salario: 2500 },
  { id: 2, nome: "ed", salario: 1800 },
  { id: 3, nome: "thiago", salario: 1500 },
  { id: 4, nome: "ray", salario: 400 }
];



class Lista extends Component{

  constructor(){
    super();
    this.state = {
      lista
    }

  }

  salarioCallback(amigo){
    const idx = this.state.lista.findIndex(item => {
      return item.id === amigo.id;
    })
    let attAmigo = this.state.lista[idx];
    attAmigo.salario += attAmigo.salario *= 0.1;
    this.state.lista[idx] = attAmigo;
    this.setState({lista: this.state.lista});
  }

  listagem(){
    return this.state.lista.map((item) => { return ( 
      <Unidade key={item.id} nome={item.nome} id={item.id} salarioCallback={this.salarioCallback.bind(this)} salario={item.salario} />


    ) })
  }

  render() {
    return (
    <div>
      { this.listagem() }
    
    </div>
    );
  }
}
 export default Lista;
