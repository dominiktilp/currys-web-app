import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as AppActions from '../actions/appActions.js';

import SelectCategory from '../components/SelectCategory.js';

const needs = [
  AppActions.setUniverseId,
  AppActions.setCategoryId
];

class SegmentList extends React.Component {

  constructor(params) {
    super(params);
    this.needs = needs;
  }

  render() {
    return (
      <div>
        <h1>SelectSegment / or product</h1>
        <Link to="/universe/0/category/0/segment/0">Segment 0</Link>
        <Link to="/universe/0/category/0/segment/0/product/0">Product 0</Link>

      </div>
    );
  }

}

SegmentList.propTypes = {
  actions: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired
};

SegmentList.needs = needs;

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
)(SegmentList);
