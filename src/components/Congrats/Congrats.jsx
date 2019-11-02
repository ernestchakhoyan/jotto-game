import React, { Component } from "react";
import PropTypes from "prop-types";

class Congrats extends Component {
    render() {
        const { success } = this.props;
        return (
            <div data-test="congrats-component">
                {success ? (
                    <div data-test="congrats-message" className="alert alert-success">
                        Congratulation! You guessed the word!
                    </div>
                ) : (
                    <div data-test="congrats-no-message" />
                )}
            </div>
        );
    }
}

Congrats.propTypes = {
    success: PropTypes.bool.isRequired
};

export default Congrats;