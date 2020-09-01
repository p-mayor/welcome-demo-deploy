import React from 'react';
//import our service
import JeopardyService from "../../jeopardyService";

class Jeopardy extends React.Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);

    this.client = new JeopardyService();
    this.state = {
      data: {},
      score: 0
    }
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      console.log(result)
      this.setState({
        data: result.data[0]
      })
    })
  }
  //when the component mounts, get the first question
  componentDidMount() {
    this.getNewQuestion();
  }
  //display the results on the screen
  render() {

    let element = "Loading..."

    if (this.state.data.category !== undefined) {
      element = (
        <div>
          Question: {this.state.data.question}
          <br />
          Point Value: {this.state.data.value}
          <br />
          Title: {this.state.data.category.title}
        </div>
      )
    }

    return (
      <div>
        {element}
      </div>
    );
  }
}
export default Jeopardy;