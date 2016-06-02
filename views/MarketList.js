import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchNeeds } from '../utils/fetchComponentData';

import * as AppActions from '../actions/appActions.js';

const needs = [
  AppActions.setUniverseId,
  AppActions.setCategoryId
];

class MarketList extends React.Component {

  constructor(params) {
    super(params);
    this.needs = needs;
  }

  componentDidMount() {
    if (!this.props.state.getIn(['app', 'marketId']) || !this.props.state.getIn(['app', 'market'])) {
      fetchNeeds(this.needs, this.props);
    }
  }

  render() {
    return (
      <div>
        <h1>SelectMarket</h1>
        <Link to="/universe/0/category/0/market/0">Market 0</Link>

      </div>
    );
  }

}

MarketList.propTypes = {
  actions: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired
};

MarketList.needs = needs;

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
)(MarketList);
