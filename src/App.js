import './App.css';
import React from 'react';

class App extends React.Component {

  constructor() {
    super()

    this.state = {
        listColors: ['black', 'yellow', 'blue', 'green', 'red'],
        actualColor: 'green'
    }
  }

  drawColor = () => {
    let pos = Math.floor(Math.random() * this.state.listColors.length)
    this.setState(currentState => ({
      actualColor: currentState.listColors[pos]
    }))
  }

  render() {
    let contador = 0
    while (contador < 5) {
      setInterval(() => {
        this.drawColor()
      }, 1000);
      contador += 1
    
      return (
        <>
          <body class="body">
            <div class="square">
                <div class="block" style={{background: this.state.actualColor}}>      
                </div>
            </div>
            {
               <p>Esta cor é: {this.state.actualColor}</p>
             } 
          </body>
        </>
      )
    }
  }
}

export default App;
