import React, {Component} from 'react';

class Tutorial extends Component {
    state = {
        shown: false, /* TODO: True to start on load */
    }

    handleModal = (e) => {
        e.preventDefault();
        this.setState({shown:!this.state.shown})
    }

    render () {
        return (
            <a href="" className={`tutorial-link ${this.state.shown ? '' : ' hidden'}`} onClick={this.handleModal}>
            <div className="tutorial-modal">
                <h3 className="heading">How to Aim a Hurricane</h3>
                <p className="tutorial-body">Click and drag the red low (<span className="red heading">L</span>) onto a low target over the United States, the blue high (<span className="blue heading">H</span>) onto a high target over the Atlantic Ocean, and the animated hurricane onto either starting location target over the Atlantic Ocean. When all three are positioned, a Start button will appear at left. Click it to see the storm track for that combination.</p>
                <p className="tutorial-exit">Click anywhere to continue</p>
            </div>
            </a>
        )
    }
}

export default Tutorial;