import React from 'react'
import { useContext } from 'react'
import { QuestionContext } from '../context/QuestionProvider'

export default function Question() {
    let { currentQuestion, answerQuestion, selectedAnswers, answerSelect } = useContext(QuestionContext);
   
    return (
        <div>
            {currentQuestion &&
                <h2>
                    {currentQuestion.question}
                    <ul className='no-bullets'>
                        {
                            currentQuestion.options.map(opt => {
                               return <li key={opt} > <input   type="radio" name="opts" value={opt} 
                               checked={selectedAnswers[currentQuestion.id] === opt} 
                               onChange={() => answerSelect(currentQuestion.id, opt)}
                               /> {opt} </li>
                            })
                        }
                    </ul>
                </h2>
            }
        </div>
    )
}
