import React from 'react'
import { useContext } from 'react'
import { QuestionContext } from '../context/QuestionProvider'
import { Button } from 'react-bootstrap'
export default function Footer() {
    let { prevQuestion, nextQuestion } = useContext(QuestionContext);

    return (

        <div className="d-flex justify-content-center">  
            <Button onClick={prevQuestion}> &lt; &lt; </Button>
            <Button onClick={nextQuestion}> &gt; &gt; </Button>
        </div>

    )
}
