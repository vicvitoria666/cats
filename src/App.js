import React, {Component} from 'react';
import styled from 'styled-componets';

class Cats extends Component {

state = {
 cats: [
   {
     name: 'Ronrom',
     yearsOld: 3,
     personality: 'Amigável, Extrovertido, Protetor do lar',
   },{
     name: 'Sprinkles',
     yearsOld: 5,
     personality: 'Dorminhoco, Introvertido, Carinhoso',
   },{
     name: 'Bola de Neve',
     yearsOld: 6,
     personality: 'Dócil, Meigo, Introvertido'
   },{
     name: 'Mintsia',
     yearsOld: 2,
     personality: 'Aventureira, Caçadora, Fofa'
   },{
     name: 'Haze',
     yearsOld: 1,
     personality: 'Brincalhona, Agitada, Faminta'
   }
 ]
}

  render(){
    return(
      <div>
        
        <h1>Gatos para te adotar ♡</h1>
        {this.state.cats.map((item) => (
          <div>
            <h2> Nome: {item.name} </h2>
            <h3> Idade: {item.yearsOld} </h3>
            <h4> Personalidade: {item.personality} </h4>
          </div>
        )
        )}

      </div>
    )
  }
}
export default Cats