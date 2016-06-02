import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchNeeds } from '../utils/fetchComponentData';

import * as AppActions from '../actions/appActions.js';

const needs = [
  AppActions.loadUniverseList,
  AppActions.setUniverseId,
  AppActions.setCategoryId
];

class MarketList extends React.Component {

  constructor(params) {
    super(params);
    this.needs = needs;
    this.renderMarkets = this.renderMarkets.bind(this);
  }

  componentDidMount() {
    if (!this.props.state.getIn(['app', 'marketId']) || !this.props.state.getIn(['app', 'market'])) {
      fetchNeeds(this.needs, this.props);
    }
  }


  renderMarkets(marketData) {
    if (!this.props.state.getIn(['app', 'universeId'])) {
      return (
        <div className="appLoader">
        ...loading...
        </div>
      );
    } else {
      const universeId = this.props.params.universeId
      return(
        <div className="universe-select">
          <div className="text-wrapper">
            <Link to={"/universe/"+universeId+"/category/"+marketData.parentId+"/market/"+marketData.id}>{marketData.name}</Link>
          </div>
          <div className="caret">
            &gt;
          </div>
        </div>
      )
    }
  }

  render() {
    //{universeList.toJS().market[categoryId].map(this.renderMarkets)}
    const universeList = this.props.state.getIn(['app', 'universeList'])
    const categoryId = this.props.params.categoryId
    // console.log(universeList.toJS());
    return (
      <div>
        {universeList.toJS().market[categoryId].map(this.renderMarkets)}
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
