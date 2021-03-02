import React from 'react'

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        // This binding is necessary to make `this` work in the callback
       //this.handleClick = this.handleClick.bind(this);
    }
    
    //Geralmente, se você referir a um método sem () depois dele, como onClick={this.handleClick}, você deve fazer o bind manual deste método.
    // O this dessa função sendo chamada pelo button(como callback) é undefined
    // para poder usar o this da classe é necessário executar o bind(this) desta função
    // handleClick() {
    //     this.setState(state => ({
    //         isToggleOn: !state.isToggleOn
    //     }));
    // }

    // Essa sintaxe garante que o `this` seja vinculado ao handleClick.
    // Atenção: essa é uma sintaxe *experimental*.
    handleClick = () => {    
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

export default Toggle