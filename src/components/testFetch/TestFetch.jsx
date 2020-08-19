import React from 'react'

class TestFetch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentCharacter: {},
            currentNumber: 1
        }
    }

    componentDidMount() {
        this.myTestFetch()
    }

    myTestFetch() {
        fetch("https://swapi.dev/api/people/" + this.state.currentNumber)
            .then(res => res.json())
            .then(characterJSON => {
                console.log(characterJSON)
                this.setState({ currentCharacter: characterJSON })
            }) 
    }

    clickHandler = () => {
        console.log("hello")
        this.setState((prevState, props)=>{
            return {currentNumber: prevState.currentNumber + 1}
        }, this.myTestFetch)
    }

    render() {
        return (
            <div className="TestFetch">
                Name: {this.state.currentCharacter.name}
                <br/> 
                Height: {this.state.currentCharacter.height}
                <button onClick={this.clickHandler}>Next Character</button>
            </div>
        )
    }
}

export default TestFetch;