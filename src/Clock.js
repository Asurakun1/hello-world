import React from 'react';


export class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date().toLocaleTimeString()
        }
        this.loadTime = this.loadTime.bind(this);
    }

    loadTime(){
     this.intervalID = setInterval(() => {
            this.setState({
                date: new Date().toLocaleTimeString()
            });
        }, 1000);
    }

    componentDidMount(){
        this.loadTime();
    }

    componentWillUnmount(){
        clearInterval(this.intervalID);
    }
    render(){
        return(
            <div className='Clock'>{this.state.date}</div>
        );
    }
}