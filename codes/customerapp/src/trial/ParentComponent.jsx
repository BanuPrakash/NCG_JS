import React, { Component } from 'react'
import NameComponent from './NameComponent'
import AgeComponent from './AgeComponent'

export default class ParentComponent extends Component {
    state = {
        name :"Roger",
        age : 24
    }
    updateName() {
        this.setState({
            name : this.state.name +" .. "
        })
    }

    updateAge() {
        this.setState({
            age: this.state.age + 1
        })
    }
    render() {
        console.log("Parent renders!!!")
        return (
            <div>
                <h1>Parent</h1>
                <NameComponent name={this.state.name}/>
                <AgeComponent age={this.state.age} />
                <button type='button' onClick={this.updateName.bind(this)}>Change Name</button>
                <button type='button' onClick={this.updateAge.bind(this)}>Change Age</button>
            </div>
        )
    }
}
