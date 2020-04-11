import React, { PureComponent } from 'react';
import './TrafficLight.css';



class TrafficLight extends PureComponent {



    render() {
        let classStyle= 'circle ' + this.props.color;
        return(
            <div className = {classStyle}></div>
        )
    };
}

export default TrafficLight;