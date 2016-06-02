import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchNeeds } from '../utils/fetchComponentData';

import * as AppActions from '../actions/appActions.js';

const needs = [
  AppActions.setUniverseId,
  AppActions.setCategoryId,
  AppActions.setSegmentId,
  AppActions.setProductId
];

class Product extends React.Component {

  constructor(params) {
    super(params);
    this.needs = needs;
  }

  componentDidMount() {
    if (!this.props.state.getIn(['app', 'productId']) || !this.props.state.getIn(['app', 'product'])) {
      fetchNeeds(this.needs, this.props);
    }
  }

  render() {
    return (
      <div>
        <h2>Product page</h2>

      </div>
    );
  }

}

Product.propTypes = {
  actions: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired
};

Product.needs = needs;

function mapStateToProps(state) {
  return { state };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators(AppActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
