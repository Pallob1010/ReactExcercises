import React, { Component } from 'react'
import './style.css';
export class Object extends Component {
    render() {
        
        const {para}=this.props;

        return (
            <div className='view'>
                {para}
            </div>
        )
    }
}

export default Object
