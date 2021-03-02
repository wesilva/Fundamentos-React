import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'
import Clock from './Clock'
import Toggle from './Toggle'
import Counter from './Counter';

class App extends Component {
    state = {
        characters: []
    }

    removeCharacter = (index) => {
        const { characters } = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            })
        })
    }

    handleSubmit = (character) => {
        this.setState({ characters: [...this.state.characters, character] })
    }

    render() {
        const { characters } = this.state

        return (
            <div className="container">
                <Clock />
                <Toggle />
                <Counter />
                <div className="container">
                    <Form handleSubmit={this.handleSubmit} />
                    <Table characterData={characters} removeCharacter={this.removeCharacter} />
                </div>
            </div>
        )
    }
}

export default App