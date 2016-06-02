import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchNeeds } from '../utils/fetchComponentData';

import * as AppActions from '../actions/appActions.js';

import SelectCategory from '../components/SelectCategory.js';

const needs = [
  AppActions.setUniverseId,
  AppActions.setCategoryId,
  AppActions.setMarketId
];

class SegmentList extends React.Component {

  constructor(params) {
    super(params);
    this.needs = needs;
  }

  componentDidMount() {
    if (!this.props.state.getIn(['app', 'segmentId']) || !this.props.state.getIn(['app', 'segment'])) {
      fetchNeeds(this.needs, this.props);
    }
  }

  render() {
    return (
      <div>
        <h1>SelectSegment / or product</h1>
        <Link to="/universe/0/category/0/market/0/segment/0">Segment 0</Link> <br />
        <Link to="/universe/0/category/0/market/0/segment/0/product/10116551">Product 0</Link>
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
