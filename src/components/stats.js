import React, { Component } from "react";
import Rtamagotchi from './Rtamagotchi';
import Rrpsls from './Rrpsls';
export default class stats extends Component{
    render(){
    return(
        <div>
            <h1>Tamagotchi</h1>
            <Rtamagotchi/>
            <h1>Piedra</h1>
            <Rrpsls/>
        </div>
    )
    }
}
