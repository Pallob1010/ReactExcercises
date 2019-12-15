import React, { Component } from 'react'
import Object from './Object'

export class App extends Component {

  state= {
        objects:[
          {
            name:'Bayezid' ,roll:123001, sub:'CSE'
          },
          {
            name:'Forhad' ,roll:123002, sub:'CSE'
          },
          {
            name:'Nasim' ,roll:123003, sub:'CSE'
          },
          {
            name:'Pallob' ,roll:123004, sub:'CSE'
          },
          {
            name:'Abdullah' ,roll:123005, sub:'CSE'
          },
          {
            name:'Masum' ,roll:123006, sub:'CSE'
          },
          {
            name:'Pavel' ,roll:123007, sub:'CSE'
          }
          
        ]


  }

  render() {
    return (
      <div>
        <Object objects={this.state.objects}/>
      </div>
    )
  }
}

export default App
