import React from "react";
import { connect } from "react-redux";
import Congrats from "./components/Congrats/Congrats";
import GuessedWords from "./components/GuessedWords/GuessedWords";
import Input from "./components/Input/Input";
import { getSecretWord } from "./actions";

export class UnconnectedApp extends React.Component {
    componentDidMount() {
        this.props.getSecretWord();
    }

    render() {
        const { success, guessedWords } = this.props;
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

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
