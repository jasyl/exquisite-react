import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const showPoem = () => {
    return (
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        <div>
          {props.submissions.map((line, i) => (<p key={i}>{line}</p>))}
        </div>
      </section>
    )
  }

  const showButton = () => {
    return (
      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={props.revealPoem} />
      </div>
    )
  }

  return (
    <div className="FinalPoem">
      {props.isSubmitted ? showPoem() : showButton()}
    </div>
  );
}

FinalPoem.propTypes = {
  isSubmitted: PropTypes.bool.isRequired,
  submissions: PropTypes.arrayOf(PropTypes.string).isRequired,
  revealPoem: PropTypes.func.isRequired,
};

export default FinalPoem;
