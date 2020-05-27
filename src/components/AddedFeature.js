import React from 'react';
import { updateNewPrice } from '../actions/mainAction';
import { connect } from 'react-redux';

const AddedFeature = props => {

  const deleteCost = e => {
    e.stopPropagation();
    props.updateNewPrice(props.feature);
  };


  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={deleteCost}>X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(
  null,
  { updateNewPrice }
)(AddedFeature);