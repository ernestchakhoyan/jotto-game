import React, { Component } from "react";
import { connect } from "react-redux";
import { guessWord } from "../../actions";

export class UnconnectedInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentGuess: ""
        };
    }

    submitGuess = (event) => {
        const {currentGuess} = this.state;
        event.preventDefault();

        if(currentGuess && currentGuess.length > 0) {
            this.props.guessWord(currentGuess);
        }
    };

    render() {

        const contents = this.props.success
            ? null
            : (
                <form className="form-inline">
                    <input
                        type="text"
                        className="mb-2 mx-sm-3"
                        placeholder="Enter guess"
                        data-test="input-box"
                        onChange={(event) => this.setState({currentGuess: event.target.value})}
                    />
                    <button
                        className="btn  btn-primary mb-2"
                        type="submit"
                        data-test="submit-btn"
                        onClick={this.submitGuess}
                    >
                        Submit
                    </button>
                </form>
            );

        return (
            <div data-test="component-input">
                {contents}
            </div>
        );
    }
}

const mapStateToProps = ({ success }) => {
    return {
        success
    };
};

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);