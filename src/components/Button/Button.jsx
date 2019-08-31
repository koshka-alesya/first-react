import React, {Component} from 'react';


class Button extends Component {
    constructor(props){
        super(props);

        this.state={
            isClicked:false,
        }
    }
    render(){


        

    return (<button type={this.props.type} className={`btn ${this.state.isClicked
                                                        ?this.props.className
                                                        :''} `} 
    onClick={() =>{
        this.setState (state: {
            isClicked:!this.state.isClicked, 

        })
    }}
    >
        {this.props.text}
        </button>
    
    );

}
}

export default Button;