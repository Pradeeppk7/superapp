import React, { useEffect, useState } from 'react';
import './Notes.css';
// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 *
 */
const Notes = () => {
    let [note, setNote] = useState();
    useEffect(() => {
        let text = JSON.parse(window.localStorage.getItem("text"));
        setNote(text);
    })

    
    const setthenote = (e) => {
        let text = e.target.value;
        setNote(text);
        window.localStorage.setItem("text", JSON.stringify(text));
    }
  return (
    <div className="Notesection">
          <h1 className="noteheading">All notes</h1>
          <textarea value={note} onChange={setthenote}/>
    </div>
  );
};

Notes.propTypes = propTypes;
Notes.defaultProps = defaultProps;
// #endregion

export default Notes;
