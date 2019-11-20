import * as React from 'react';

type ITeamS = {
    counter: number;
    counterTeam: number;
}

type ITeamP = {
    drawNewCanvas?:any,
    handleUndo?:any
}

export class Team extends React.Component<ITeamP,ITeamS> {
    constructor(props:ITeamP){
        super(props);
        this.state = {
            counter: 0,
            counterTeam: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.incrementTeam = this.incrementTeam.bind(this);
        this.decrementTeam = this.decrementTeam.bind(this);
    }

    public increment() {
        this.setState({
          counter: this.state.counter + 1
        })
      }
      
    public  decrement(){
        this.setState(prevState => 
            ({counter: prevState.counter? prevState.counter -1: 0})
        )
    }
    public incrementTeam() {
        this.setState({
            counterTeam: this.state.counterTeam + 1
        })
      }
      
    public  decrementTeam(){
        this.setState(prevState => 
            ({counterTeam: prevState.counterTeam? prevState.counterTeam-1: 0})
        )
    }

    render(){
        const {handleUndo, drawNewCanvas} = this.props;
        return (
            <>
            <div>
                <div>Choose the number of people playing </div>
                <div className="team--groupIncrement">
                    <span onClick={drawNewCanvas}><button className="team--increment" onClick={this.increment} >+</button></span>
                    <div className="team--stateCounter">{this.state.counter}</div>
                    <span onClick={handleUndo}><button className="team--decrement" onClick={this.decrement}>-</button></span>
                </div>
            </div>
            <div>
                <div>How many teams </div>
                <div className="team--groupIncrement">
                    <button className="team--increment" onClick={this.incrementTeam}>+</button>
                    <div className="team--stateCounter">{this.state.counterTeam}</div>
                    <button className="team--decrement" onClick={this.decrementTeam}>-</button>
                </div>
            </div>
            </>
        )
    }
}