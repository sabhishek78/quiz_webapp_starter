
import React ,{useState} from "react";
import './styles.css';
export default function Result(props) {
    return (
        <div>
            <div>Your Score is</div>
            <div>
                {props.score}/{props.numberOfQuestions*10}
            </div>
        </div>

    )
}