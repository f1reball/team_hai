import React, { Component } from "react";

import './glitch_text.css';

class Glitch_Text extends Component {

    render(){
        return (
            <h2 class="hero glitch layers" data-text={this.props.underText}><span>{this.props.text}</span></h2>
        )
    }
}

export default Glitch_Text