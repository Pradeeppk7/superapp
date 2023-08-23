import React, { useEffect, useState } from 'react';
import './block.css';
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
const Block = (props) => {
    
    function cardClicked() {
        // props.setClicked({ ...props.isClicked,  [props.name]:!props.categories.includes(props.name) });
        if (props.categories.includes(props.name)) {
            props.setCategories((current) =>
      current.filter((id) => id !== props.name));
        }
        else {
            props.setCategories([ ...props.categories, props.name ]);
        }
    }
    
    return <div className={props.categories.includes(props.name) ? 'greenborder block' : 'block'} style={{ backgroundColor: props.bg }} onClick={cardClicked}>
        <h1 className='categorygenre'>{props.name}</h1>
        <div className="imagecenter">
        {props.image}
        </div>
    </div>;
}

Block.propTypes = propTypes;
Block.defaultProps = defaultProps;
// #endregion

export default Block;