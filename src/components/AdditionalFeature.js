import React from 'react';
import { updatePrice } from '../actions/mainAction';
import { connect } from 'react-redux';

const AdditionalFeature = props => {

  const addCost = e => {
    e.stopPropagation();
    props.updatePrice(props.feature);
  };

  return (
    <li>
      <button className="button" onClick={addCost}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(
  null,
  { updatePrice }
)(AdditionalFeature);
