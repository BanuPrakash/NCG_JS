import React, { Component } from 'react'
import { shuffle } from 'lodash'
import Question from './Question'

export default class Quiz extends Component {
    state = {
        "answered": {
            "1": "",
            "2": "",
            "3": "",
            "4": "",
            "5": ""
        },
        "questions": []
    }

    componentDidMount() {
        fetch("https://opentdb.com/api.php?amount=5&category=18").then(response => response.json()).then(data => {
            this.setState({
                questions: shuffle(data.results.map(result => {
                    return { "question": result.question, "options": [...result.incorrect_answers, result.correct_answer] }
                }))
            })
        })
    }

    render() {

        return <div>
            {
                this.state.questions.map(question => <Question question={question} />)
            }
            <button type='button'>Submit</button>
        </div>
    }

}
