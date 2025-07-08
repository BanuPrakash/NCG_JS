import React from 'react'
import { useContext } from 'react'
import { QuestionContext } from '../context/QuestionProvider'

export default function Header() {
    let { total, currentIndex, correct } = useContext(QuestionContext)
    return (
        <div>
            <span className="d-flex justify-content-start"><h1>MCQ General</h1>  </span>
            <span className="d-flex justify-content-end">
                <h1> Correct: {correct} / {total} &nbsp; &nbsp; Total: {currentIndex + 1}/{total}</h1>
            </span>
        </div>

    )


}
