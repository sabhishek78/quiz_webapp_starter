import React from "react";

import './styles.css'


class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
        this.intervalId=null;
        this.state={
            width:100,
            color:'#58B19F',
        };
    }
    componentDidMount() {
        let count=100;
        this.intervalId=setInterval(()=>{
            if(this.props.disableTimer){
                clearInterval(this.intervalId);
            }

        count=count-1;
        this.setState({
            width:count*1,

        });
        if(count<30){
            this.setState({color:'#FD7272'})
        }
        if(count==0){
            clearInterval(this.intervalId);
            this.props.timeUp();
        }
    },100);}
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <div className="progress-bar" style={{width:this.state.width+'%',backgroundColor:this.state.color}}>
            </div>
        );
    }
}


export default ProgressBar;