import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {
  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(' ');

  const [poemLines, setPoemLines] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onUpdatePoem = (newLine) => {

    const formatLine = FIELDS.map((field) => {
      if (field.key) {
        return newLine[field.key];
      } else {
        return field;
      }
    }).join(' ');

    setPoemLines([...poemLines, formatLine]);
  }

  const revealPoem = () => {
    setIsSubmitted(true);
  }

  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>
      {/* this doesn't feel super dry with the !isSubmitted twice */}
      {!isSubmitted && <RecentSubmission submission={poemLines[poemLines.length - 1] || ''}  /> }

      {!isSubmitted && <PlayerSubmissionForm sendSubmission={onUpdatePoem} index={poemLines.length + 1} fields={FIELDS}/>}

      <FinalPoem submissions={poemLines} revealPoem={revealPoem} isSubmitted={isSubmitted}/>

    </div>
  );
}


const FIELDS = [
  'The',
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  'the',
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  '.',
];

export default Game;
