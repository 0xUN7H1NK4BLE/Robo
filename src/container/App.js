import React, { Component } from "react";
// import {robots} from './robo.js';
import Cardlist from "../component/Cardlist.js";
import Searchbox from '../component/Searchbox';
import './App.css';
import Scroll from '../component/Scroll';


class App extends Component {
    constructor(){
        super()
        this.state={
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response=> Response.json())
        .then(users=>{this.setState({robots:users})});
    }

onsearchchange=(event)=>{
    this.setState({searchfield:event.target.value })



}

    render(){
        const filteredrobots = this.state.robots.filter(robots => {
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
            })
        if (this.state.robots.length === 0){
            return <h1 className="tc">Loading</h1>
        }else{
    return (
    <div className="tc">
     <h1>Robo Friends</h1>
     <Searchbox searchChange={this.onsearchchange}/>
     <Scroll>
     <Cardlist robots={filteredrobots}/>
     </Scroll>
    </div>
    );
        }
}
}

export default App;