import React, { Component } from 'react'
import './style.css';
export class Object extends Component {
    render() {
        
        const {objects}=this.props;
        const objectlist=objects.map(item=>{

            return(
            <div className='view'>{ item.para} </div>
            )
          
        })
        return (
            <div >
                {objectlist}
            </div>
        )
    }
}

export default Object
