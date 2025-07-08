import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from 'axios'

const QuestionContext = createContext();
export {
    QuestionContext
}

export default function QuestionContextProvider({ children }) {
    let [questions, setQuestions] = useState();
    let [currentIndex, setCurrentIndex] = useState(0);
    let [currentQuestion, setCurrentQuestion] = useState();
    let [correct, setCorrect] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});

    function answerSelect(questionId, answer) {
        setSelectedAnswers(prevAnswers => {
            return { ...prevAnswers, [questionId]: answer };
        });
    }

    useEffect(() => {
        let totalCorrect = 0;
        Object.keys(selectedAnswers).forEach((index) => {
            //    console.log(selectedAnswers[index], questions[index-1].correct_answer);
            if (selectedAnswers[index] === questions[index - 1].correct_answer) {
                totalCorrect++;

            }
        });
        setCorrect(totalCorrect);
    })

    useEffect(() => {
        async function fetchData() {
            let response = await axios.get("http://localhost:1234/questions");
            let questions = response.data;
            setQuestions(questions);
            setCurrentQuestion(questions[0]);
        }
        fetchData();
    }, [])


    function nextQuestion() {
        if (currentIndex < 3) {
            setCurrentIndex(currentIndex + 1);
            // setCurrentQuestion(questions[currentIndex]);
        }
    }

    useEffect(() => {
        if (questions) {
            setCurrentQuestion(questions[currentIndex + 1]);
        }
    }, [currentIndex])

    function prevQuestion() {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            //    setCurrentQuestion(questions[currentIndex]);
        }
    }

    function answerQuestion(qid, selectedOption) {
        if (questions[qid - 1].correct_answer === selectedOption) {
            setCorrect(correct + 1);
        }
    }
    return <QuestionContext.Provider value={{
        currentQuestion,
        nextQuestion,
        prevQuestion,
        currentIndex,
        total: questions ? questions.length : 0,
        answerSelect,
        selectedAnswers,
        correct
    }}>
        {children}
    </QuestionContext.Provider>
}