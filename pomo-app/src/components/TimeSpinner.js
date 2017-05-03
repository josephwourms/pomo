import React, {Component} from 'react';

import Slider from 'material-ui/Slider';
import formatTime from '../lib/core.js';

import './TimeSpinner.css';

class TimeSpinner extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            value: this.props.value,
        };
        
        this.onSliderChange = this.onSliderChange.bind(this);
    }
    
    onSliderChange(e, value) {
        this.setState({value});
        this.props.onChange(e, value);
    }
    
    render() {
        return (
            <div className="time-spinner">
                <label>{this.props.label}: {formatTime(this.state.value)}</label>
                <Slider 
                    min={60}
                    max={3600}
                    step={60}
                    value={this.state.value}
                    onChange={this.onSliderChange}
                    style={{color: "#E82C0C"}}
                />
            </div>
        );
    }
}

export default TimeSpinner;