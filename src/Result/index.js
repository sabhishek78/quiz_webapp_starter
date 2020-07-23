import React, {useState} from "react";
import './styles.css';

export default function Result(props) {
    return (
        <div>
            <div>Your Score is</div>
            <div>
                {props.score}/{props.numberOfQuestions * 10}
            </div>
            <div>
                <table>
                    <tr>
                        <th>Question</th>
                        <th>Correct Answer</th>
                        <th>Your Answer</th>
                    </tr>
                    {
                    props.questions.map((item, index) => (
                        <tr>
                            <td>{item.text}</td>
                            <td>{item.options[item.correct_choice]}</td>
                            <td>{item.options[props.answerList[index]]}</td>
                        </tr>
                    ))
                }
                </table>
            </div>
        </div>

    )
}
// <Result score={this.state.score} numberOfQuestions={this.questions.length}
//         questions={this.questions} answerList={this.answerList} />