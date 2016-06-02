import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchNeeds } from '../utils/fetchComponentData';

import * as AppActions from '../actions/appActions.js';

import SelectCategory from '../components/SelectCategory.js';

const needs = [
  AppActions.loadUniverseList,
  AppActions.setUniverseId,
  AppActions.setCategoryId,
  AppActions.setMarketId
];

class SegmentList extends React.Component {

  constructor(params) {
    super(params);
    this.needs = needs;
    this.renderSegments = this.renderSegments.bind(this);
  }



  componentDidMount() {
    if (!this.props.state.getIn(['app', 'segmentId']) || !this.props.state.getIn(['app', 'segment'])) {
      fetchNeeds(this.needs, this.props);
    }
  }

  renderSegments(segmentData) {
    if (!this.props.state.getIn(['app', 'universeId'])) {
      return (
        <div className="appLoader">
        ...loading...
        </div>
      );
    } else {
      const universeId = this.props.params.universeId
      const categoryId = this.props.params.categoryId
      return(
        <div className="universe-select">
          <div className="text-wrapper">
            <Link to={"/universe/"+universeId+"/category/"+categoryId+"/market/"+segmentData.parentId+"/segment/"+segmentData.id}>{segmentData.name}</Link>
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
    const marketId = this.props.params.marketId
    return (
      <div>
        {universeList.toJS().segment[marketId].map(this.renderSegments)}
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
