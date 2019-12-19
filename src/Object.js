import React, { Component } from 'react'
import './style.css';
export class Object extends Component {
    render() {
        
        const {objects}=this.props;
        const objectlist=objects.map(item=>{

            if(item.roll<123005){
                return(
                    <div className='view' key={item.roll}>
                        <p>{item.name} {item.roll} {item.sub}</p>
                         </div>
                    )
            }else{
                return null;
            }
           
          
        })
        return (
            <div >
                {objectlist}
            </div>
        )
    }
}

export default Object
