import React ,{useState} from "react";
import './styles.css';
import Confetti from 'react-dom-confetti';



export default function Option(props) {
    return (
        <div
            className={(props.isClicked?(props.isCorrectOption?'correct-option option':'wrong-option option'):'option')}
            onClick={()=>props.optionClicked(props.id)}>
            {props.text}
            <Confetti active={props.isClicked && props.isCorrectOption} />
        </div>
    )
}