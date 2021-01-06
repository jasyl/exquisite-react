import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';


const PlayerSubmissionForm = (props) => {

  const setInitialState = () => {
    let initialState = {};
    props.fields.forEach((field) => {
      if (field.key) initialState[field.key] = ''; 
  })
    return initialState
  }

  const [line, setLine] = useState(setInitialState());

  const onFormChange = (e) => {
    setLine({
      ...line, 
      [e.target.name]: e.target.value})
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    props.sendSubmission(line);

    setLine(setInitialState());

  }

  const isValid = (value) => {
    if (value === '') return 'PlayerSubmissionFormt__input--invalid'
    else return null
  }

  const generateInputFields = () => {
    return (
      props.fields.map((field, i) => {
        if (field.key) {
          return (
            <input
              key={field.key}
              name={field.key}
              placeholder={field.placeholder}
              type="text"
              onChange={onFormChange}
              value={line[field.key]}
              className={isValid(line[field.key])}
            />
          )
        } else {
          return <span key={field}>{field}</span>
        }
      }
    ))
  }


  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{ props.index }</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={onSubmitHandler} >

        <div className="PlayerSubmissionForm__poem-inputs">

          {generateInputFields()}

          {/* <span>The</span>

          <input
            name="adjective1"
            placeholder="adjective1"
            type="text"
            onChange={onFormChange}
            value={line.adjective1} 
            className={isValid(line.adjective1)}
            />

          <input
            name="noun1"
            placeholder="noun1"
            type="text" 
            onChange={onFormChange}
            value={line.noun1}
            className={isValid(line.adjective1)} />

          <input
            name="adverb"
            placeholder="adverb"
            type="text"
            onChange={onFormChange}
            value={line.adverb}
            className={isValid(line.adjective1)} />

          <input
            name="verb"
            placeholder="verb"
            type="text"
            onChange={onFormChange} 
            value={line.verb}
            className={isValid(line.adjective1)}/>

          <span>the</span>

          <input
            name="adjective2"
            placeholder="adjective2"
            type="text"
            onChange={onFormChange}
            value={line.adjective2}
            className={isValid(line.adjective1)} />
          <input
            name="noun2"
            placeholder="noun2"
            type="text"
            onChange={onFormChange}
            value={line.noun2}
            className={isValid(line.noun2)} />

          <span>.</span> */}

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
