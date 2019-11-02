import React, { Component } from "react";

class Congrats extends Component {
    render() {
        const {success} = this.props;
        return (
            <div data-test="congrats-component">
               {success ? (
                   <div data-test="congrats-message">
                       Congratulation! You guessed the word!
                   </div>
               ) : (
                   <div data-test="congrats-no-message"/>
               )}
            </div>
        );
    }
}

export default Congrats;