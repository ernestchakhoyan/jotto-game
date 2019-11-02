import React from 'react';
import Congrats from "./components/Congrats/Congrats";
import GuessedWords from "./components/GuessedWords/GuessedWords";

function App() {
  return (
    <div className="container">
      <h1>Jotto</h1>
        <Congrats success={true}/>
        <GuessedWords guessedWords={[
          { guessedWord: "train", letterMatchCount: 3 },
          { guessedWord: "agile", letterMatchCount: 1 },
          { guessedWord: "party", letterMatchCount: 5 },
        ]}/>
    </div>
  );
}

export default App;
