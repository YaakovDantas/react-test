import React, { Component } from 'react';

class Unidade extends Component{


  render() {
    return (
      <div>
        <p> {this.props.nome} -- {this.props.salario} </p>
        <button onClick={() => {this.props.salarioCallback({id: this.props.id})}}>+</button>
      </div>
    );
  }
}
 export default Unidade;