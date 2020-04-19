import React from "react";
import Question from "../Question";
import Option from "../Option";
import './styles.css'
import ProgressBar from "../ProgressBar";
import Result from "../Result";


class Quiz extends React.Component {
    state = {
        score: 0,
        selectedOption: null,
        questionIndex:0,
        disableClick:false,
    };
    questions = [
        {
            'text': "Who is current PM of India?",
            'options': ['Narendra Modi', 'Rahul Gandhi', 'Manmohan Singh', 'Sonia Gandhi'],
            'correct_choice': 0
        },
        {
            'text': "What is capital of Orissa?",
            'options': ['Chandigarh', 'Bhubaneshwar', 'Tripura', 'Nagaland'],
            'correct_choice': 1
        },
        {
            'text': 'In the context to Indias wild life, the flying fox is a __?',
            'options': ['Bat', 'Vulture', 'Stok', 'Kite'],
            'correct_choice': 0
        },
        {
            'text': 'What percentage of land area should remain covered by forest to maintain Ecological balance?',
            'options': ['10%', '33%', '5%', 'None of these'],
            'correct_choice': 1
        },
        {
            'text': ' The purest form of iron is',
            'options': ['Wrought iron', 'Steel', 'Pig iron', 'Nickel steel'],
            'correct_choice': 0
        },
        {
            'text': 'Layer of atmosphere in which Ozone layer lies is',
            'options': ['Exosphere', 'Mesosphere', 'Troposphere', 'Stratosphere'],
            'correct_choice': 3
        },
    ];
    handleOptionSelected = (id) => {
        this.setState({
            selectedOption: id,
            score: this.questions[this.state.questionIndex]['correct_choice'] === id ? this.state.score+10 : this.state.score,
            disableClick:true,
        })
        setTimeout(() => {
            this.setState({
                questionIndex:this.state.questionIndex+1,
                selectedOption: null,
                disableClick:false,

            })
        }, 3000);

    };
    timeUp=()=>{
        this.setState( {
            questionIndex:this.state.questionIndex+1,
            selectedOption: null,
            disableClick:false,
        })
}
    render() {
        if(this.state.questionIndex===this.questions.length){
            return(
                <div>
                    <Result score={this.state.score} numberOfQuestions={this.questions.length}/>
                </div>
            )
        }
        return (
            <div className="header">
                <div className="score">Score: {this.state.score}</div>
                <Question question={this.questions[this.state.questionIndex]['text']}/>
                <div className="options-container">
                    <Option text={this.questions[this.state.questionIndex]['options'][0]} id={0} isClicked={this.state.selectedOption === 0}
                            isCorrectOption={this.questions[this.state.questionIndex]['correct_choice'] === 0}
                            optionClicked={this.handleOptionSelected}/>
                    <Option text={this.questions[this.state.questionIndex]['options'][1]} id={1} isClicked={this.state.selectedOption === 1}
                            isCorrectOption={this.questions[this.state.questionIndex]['correct_choice'] === 1}
                            optionClicked={this.handleOptionSelected}/>
                    <Option text={this.questions[this.state.questionIndex]['options'][2]} id={2} isClicked={this.state.selectedOption === 2}
                            isCorrectOption={this.questions[this.state.questionIndex]['correct_choice'] === 2}
                            optionClicked={this.handleOptionSelected}/>
                    <Option text={this.questions[this.state.questionIndex]['options'][3]} id={3} isClicked={this.state.selectedOption === 3}
                            isCorrectOption={this.questions[this.state.questionIndex]['correct_choice'] === 3}
                            optionClicked={this.handleOptionSelected}/>
                </div>
             <ProgressBar disableTimer={this.state.disableClick} key={this.state.questionIndex}
                          className={"progress"} currentQuestionNumber={this.state.questionIndex} timeUp={this.timeUp}/>
            </div>
        );
    }
}


export default Quiz;

