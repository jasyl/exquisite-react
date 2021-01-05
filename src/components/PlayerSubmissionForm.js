import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {
  const [line, setLine] = useState({
    adjective1: '',
    noun1: '',
    adverb: '',
    verb: '',
    adjective2: '',
    noun2: '',
  });

  const onFormChange = (e) => {
    setLine({
      ...line, 
      [e.target.name]: e.target.value})
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    props.sendSubmission(line);

    setLine({
      adjective1: '',
      noun1: '',
      adverb: '',
      verb: '',
      adjective2: '',
      noun2: '',
    });

  }

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{ props.index }</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={onSubmitHandler} >

        <div className="PlayerSubmissionForm__poem-inputs">

          <span>The</span>

          <input
            name="adjective1"
            placeholder="adjective"
            type="text"
            onChange={onFormChange}
            value={line.adjective1} />

          <input
            name="noun1"
            placeholder="noun"
            type="text" 
            onChange={onFormChange}
            value={line.noun1} />

          <input
            name="adverb"
            placeholder="adverb"
            type="text"
            onChange={onFormChange}
            value={line.adverb} />

          <input
            name="verb"
            placeholder="verb"
            type="text"
            onChange={onFormChange} 
            value={line.verb}/>

          <span>the</span>

          <input
            name="adjective2"
            placeholder="adjective"
            type="text"
            onChange={onFormChange}
            value={line.adjective2} />
          <input
            name="noun2"
            placeholder="noun"
            type="text"
            onChange={onFormChange}
            value={line.noun2} />

          <span>.</span>

        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  index: PropTypes.number.isRequired,
  sendSubmission: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ])).isRequired,
}

export default PlayerSubmissionForm;
