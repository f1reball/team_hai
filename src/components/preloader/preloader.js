import React, { Component } from "react";
import './preloader.css';

import Glitch_Text from './glitchText/glitch_text';

class Preloader extends Component {

    render() {
        return (
            <div className="preloader_container">
                <Glitch_Text text="Loading" underText="请稍等" />
                <p className="forced_bottom"> <small>&copy; Copyright 2018, Team Hai</small> </p> 
            </div>

        )
    }
}

export default Preloader