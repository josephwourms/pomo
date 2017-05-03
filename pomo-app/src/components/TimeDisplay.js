import React, {Component} from 'react';
import Paper from 'material-ui/Paper';

import './TimeDisplay.css';

const WIDTH = (window.innerWidth < 0) ? screen.width * 0.60 : window.innerWidth / 2;
const HEIGHT = WIDTH;

class TimeDisplay extends Component {
    constructor(props) {
        super(props);
        
        this.style = {
            height: HEIGHT,
            width: WIDTH,
            lineHeight: 0,
            margin: 20,
            textAlign: 'center',
            verticalAlign: 'center',
            display: 'inline-block',
            background: `linear-gradient(to top, #5a9216 ${this.props.percentDone}%, #ba000d 0%)`,
            color: 'rgba(255, 255, 255, 0.8)',
            cursor: 'pointer',
        };
        
        this.onClick = this.onClick.bind(this);
    }
    
    onClick(e) {
        this.props.onClick(e);
    }
    
    render() {
        let c1 = "";
        let c2 = "";
        
        if (this.props.status === 'Work Session') {
            c1 = "#ba000d";
            c2 = "#8bc34a";
        } else {
            c1 = "#8bc34a";
            c2 = "#ba000d";
        }
        this.style.background = `linear-gradient(to top, ${c1} ${this.props.percentDone}%, ${c2} 0%)`;
        
        return (
            <div className="time-display">
                <Paper style={this.style} zDepth={1} circle={true} onClick={this.onClick}>
                    <div className="time-display inner">
                        <p className="time-display status">{this.props.status}</p>
                        <h3 className="time-display time">{this.props.time}</h3>
                        <p className="time-display prompt">{this.props.prompt}</p>
                    </div>
                </Paper>
            </div>
        );
    }
}

export default TimeDisplay;