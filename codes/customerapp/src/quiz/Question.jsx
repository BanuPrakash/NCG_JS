import { Component } from "react";

export default class Question extends Component {
    render() {
        if (this.props.question) {
            return <div>
                <h3>{this.props.question.question}</h3>
                {
                    this.props.question.options.map(option => <div key={option}><input
                        type="radio"
                        onClick={() => this.selectedOption(option)}
                        value={option} />{option}</div>)
                }
            </div>
        } else {
            return <h1>Result!!!</h1>
        }
    }

    selectedOption(option) {
        console.log(option);
    }
}