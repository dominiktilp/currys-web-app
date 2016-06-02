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
    if (!this.props.state.getIn(['app', 'categoryId']) || !this.props.state.getIn(['app', 'category'])) {
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
      const universeList = this.props.state.getIn(['app', 'universeList'])
      const linkBase = "/universe/"+universeId+"/category/"+marketData.parentId+"/market/"+marketData.id
      var linkTarget

      if (universeList.toJS().segment[marketData.id].length == 1) {
        linkTarget = linkBase+"/segment/"+universeList.toJS().segment[marketData.id][0].id
      } else {
        linkTarget = linkBase
      }
      console.log("LINK TARGET", linkTarget);

      return(
        <div className="universe-select">
          <div className="text-wrapper">
            <Link to={linkTarget}>{marketData.name}</Link>
          </div>
          <div className="caret">
            &gt;
          </div>
        </div>
      )
    }
  }

  render() {
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
