import React from "react";
import { connect } from "react-redux";
import Congrats from "./components/Congrats/Congrats";
import GuessedWords from "./components/GuessedWords/GuessedWords";
import Input from "./components/Input/Input";
import { guessWord } from "./actions";

class App extends React.Component {
    render() {
      const {success, guessedWords, secretWord} = this.props;
        return (
            <div className="container">
                <h1>Jotto</h1>
                <Congrats success={success} />
                <Input />
                <GuessedWords guessedWords={guessedWords} />
            </div>
        );
    }
}

const mapStateToProps = ({ success, guessedWords, secretWord }) => {
    return {
        success,
        guessedWords,
        secretWord
    };
};

export default connect(mapStateToProps, {guessWord})(App);
